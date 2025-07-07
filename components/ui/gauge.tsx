import { GaugeComponent } from "react-gauge-component";
export const GaugeChart = ({}) => {
  return (
    <div className="w-full">
      <GaugeComponent
        value={50}
        type="semicircle"
        maxValue={120}
        labels={{
          valueLabel: {
            formatTextValue: (value) => `${value}px`,
            hide: true,
          },
          tickLabels: {
            type: "outer",
            hideMinMax: true,
            defaultTickLineConfig: {
              hide: true,
            },
            ticks: [
              {
                value: 10,
                valueConfig: {
                  formatTextValue: () => ``,
                  style: {
                    fontSize: "10px",
                    fontWeight: "bold",
                    transform:
                      "translateY(-5px) translateX(31px) rotate(-76deg)",
                  },
                },
              },
              {
                value: 30,
                valueConfig: {
                  formatTextValue: () => ``,
                  style: {
                    fontSize: "10px",
                    fontWeight: "bolder",
                    transform:
                      "translateY(-5px) translateX(45px) rotate(-46deg)",
                  },
                },
              },
              {
                value: 50,
                valueConfig: {
                  style: {
                    fontSize: "10px",
                    fontWeight: "bold",
                    transform:
                      "translateY(28px) translateX(5px) rotate(-15deg)",
                  },
                  formatTextValue: () => ``,
                },
              },
              {
                value: 70,
                valueConfig: {
                  style: {
                    fontSize: "10px",
                    fontWeight: "bolder",
                    transform:
                      "translateY(28px) translateX(-8px) rotate(15deg)",
                  },
                  formatTextValue: () => ``,
                },
              },
              {
                value: 90,
                valueConfig: {
                  style: {
                    fontSize: "10px",
                    fontWeight: "bolder",
                    transform:
                      "translateY(11px) translateX(-28px) rotate(46deg)",
                  },
                  formatTextValue: () => ``,
                },
              },
              {
                value: 110,
                valueConfig: {
                  style: {
                    fontSize: "10px",
                    fontWeight: "bolder",
                    transform:
                      "translateY(-16px) translateX(-34px) rotate(75deg)",
                  },
                  formatTextValue: () => ``,
                },
              },
            ],
          },
        }}
        arc={{
          colorArray: ["#5BE12C", "#EA4228"],
          cornerRadius: 0.1,
          subArcs: [
            { limit: 20 },
            { limit: 40 },
            { limit: 60 },
            { limit: 80 },
            { limit: 100 },
            { limit: 120 },
          ],
          padding: 0.05,
          width: 0.15,
        }}
        pointer={{
          // elastic: true,
          animationDelay: 0,
          width: 6,
          length: 0.8,
          color: "#90FFFB",
        }}
      />
    </div>
  );
};
