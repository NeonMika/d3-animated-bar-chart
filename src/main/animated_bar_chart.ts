import * as d3 from "d3"

class AnimatedBarChart<Datum> {

  #parent : string | Element | d3.Selection<any, any, any, any>

  _data : d3.HierarchyNode<Datum> | null = null
  get data() : d3.HierarchyNode<Datum> | null {
    return this._data
  }
  setData(d : Datum | d3.HierarchyNode<Datum>, datumType :{new ():Datum}, children: ((d: any) => Iterable<Datum> ) | null = null) {
    if(d instanceof datumType) {
      if(children != null) {
        this._data = d3.hierarchy(d, children)
      }
    } else {
      this._data = d as  d3.HierarchyNode<Datum>
    }
  }

  constructor(
    parent: string | Element | d3.Selection<any, any, any, any>,
    d : d3.HierarchyNode<Datum> | null = null
  ) {
    this.#parent = AnimatedBarChart.getParent(parent)
    this.#parent.append("p").text("Hello World")
    this._data = d
  }

  static getParent(parent: string | Element | d3.Selection<any, any, any, any>) {
    if (typeof parent === "string") {
      return d3.select(parent)
    } else if (parent instanceof Element) {
      return d3.select(parent)
    } else {
      return parent
    }
  }
}

export default AnimatedBarChart;
export { AnimatedBarChart };