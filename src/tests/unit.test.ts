import { assert, expect } from "chai";
import * as d3 from "d3";
import AnimatedBarChart from "../main/animated_bar_chart";
import { JSDOM } from "jsdom"


beforeEach(() => {
  const dom = new JSDOM(
    `<html>
       <body>
           <div id="parent"></div>
       </body>
     </html>`,
    { url: 'http://localhost' },
  );

  global.window = dom.window as any;
  global.document = dom.window.document;
  global.Element = window.Element;
  global.HTMLElement = window.HTMLElement;
});

describe("Getting parent", () => {
  it("via string", () => {
    const parentSelection = AnimatedBarChart.getParent("#parent")
    expect(parentSelection.size()).to.equal(1);
  })
  it("via Element", () => {
    const parentSelection = AnimatedBarChart.getParent(document.getElementById("parent") as Element)
    expect(parentSelection.size()).to.equal(1);
  })
  it("via Selection", () => {
    const parentSelection = AnimatedBarChart.getParent(d3.select("#parent"))
    expect(parentSelection.size()).to.equal(1);
  })
})

describe("Creating chart", () => {
  it("with null data", () => {
    const chart = new AnimatedBarChart("#parent", null)
    expect(chart.data).to.equal(null);
  })

  it("with flat data", () => {
    const chart = new AnimatedBarChart("#parent", d3.hierarchy({ x: 1, y: 2}))
    expect(chart.data).to.not.equal(null);
    expect(chart.data?.data).to.deep.equal({ x: 1, y: 2});
    expect(chart.data?.depth).to.equal(0);
    expect(chart.data?.children).to.be.undefined;
  })

  it("with hierarchical data", () => {
    const chart = new AnimatedBarChart("#parent", d3.hierarchy({ x: 1, children: [{ x: 2}]}, (d: any) => d.children))
    expect(chart.data).to.not.equal(null);
    expect(chart.data).to.not.equal(undefined);
    expect(chart.data?.data).to.deep.equal({ x: 1, children: [{ x: 2}]});
    expect(chart.data?.depth).to.equal(0);
    expect(chart.data?.children?.length).to.equal(1);
    expect(chart.data?.children?.at(0)?.depth).to.equal(1);
    expect(chart.data?.children?.at(0)?.data).to.deep.equal({ x: 2 });
  })
})