import paytrace from "../../paytrace.app.mjs";

export default {
  name: "List Batches by Date Range",
  description: "This method can be used to export a set of batch summary details with a provided date range.  This method will return one or more batch summary records.",
  key: "paytrace-list-batches",
  version: "0.0.1",
  type: "action",
  props: {
    paytrace,
    startDate: {
      propDefinition: [
        paytrace,
        "startDate",
      ],
    },
    endDate: {
      propDefinition: [
        paytrace,
        "endDate",
      ],
    },
  },
  async run({ $ }) {
    const response = await this.paytrace.listBatches({
      $,
      data: {
        startDate: this.startDate,
        endDate: this.endDate,
      },
    });
    $.export("$summary", `${response.batches} batches has been retrieved`);
    return response;
  },
};
