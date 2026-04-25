const mongoose = require("mongoose");
const Feedback = require("../models/feedbackModel");

exports.getAnalyticsData = async (req, res) => {
  const userId = new mongoose.Types.ObjectId(req.user.userID);

  const past7Days = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); // past 7 days
  const previous7Days = new Date(past7Days - 7 * 24 * 60 * 60 * 1000); // previous 7 days

  const data = await Feedback.aggregate([
    {
      $match: { userId },
    },

    {
      $facet: {
        total: [
          {
            $count: "count",
          },
        ],
        previous7Days: [
          {
            $match: {
              createdAt: {
                $gte: previous7Days,
                $lte: past7Days,
              },
            },
          },
          {
            $count: "count",
          },
        ],
        last7DaysTotal: [
          {
            $match: {
              createdAt: {
                $gte: past7Days,
              },
            },
          },
          {
            $count: "count",
          },
        ],
        daily: [
          {
            $match: {
              createdAt: {
                $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
              },
            },
          },
          {
            $group: {
              _id: {
                $dateToString: {
                  format: "%Y-%m-%d",
                  date: "$createdAt",
                },
              },
              count: { $sum: 1 },
            },
          },
          {
            $sort: { _id: 1 },
          },
        ],
        category: [
          {
            $group: {
              _id: "$category",
              count: { $sum: 1 },
            },
          },
        ],
      },
    },
  ]);

  const total = data[0].total[0]?.count || 0;
  const last7 = data[0].last7DaysTotal[0]?.count || 0;
  const prev7 = data[0].previous7Days[0]?.count || 0;
  const avgPerDay = (last7 / 7).toFixed(2);

  let growthRate = 0;

  if (prev7 !== 0) {
    growthRate = (((last7 - prev7) / prev7) * 100).toFixed(2);
  } else {
    growthRate = last7 > 0 ? 100 : 0;
  }

  const response = {
    kpiCards: [
      {
        id: 1,
        label: "Total Feedback",
        value: total,
        sublabel: "All-time feedback count",
      },
      {
        id: 2,
        label: "Last 7 Days Feedback",
        value: last7,
        sublabel: "Feedback received in the past week",
      },
      {
        id: 3,
        label: "Growth Rate",
        value: growthRate,
        sublabel: "Change compared to previous 7 days",
      },
      {
        id: 4,
        label: "Avg Feedback Per Day",
        value: avgPerDay,
        sublabel: "Average daily feedback (last 7 days)",
      },
    ],

    dailyFeedback: data[0].daily.map((item) => {
      const date = new Date(item._id);
      return {
        date: date.toLocaleDateString("en-US", {
          weekday: "short",
        }),
        count: item.count,
      };
    }),

    category: data[0].category.map((category) => ({
      _id: category._id,
      count: category.count,
    })),
  };

  res.status(200).json(response);
};
