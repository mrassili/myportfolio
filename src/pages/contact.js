import React from "react"
import Layout from "../components/layout"
import classNames from "classnames"
import "../styles/contact.module.css"

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      budget: null,
    }
  }

  handleBudgetChange = e => this.setState({ budget: e.target.value })

  render() {
    const { budget } = this.state
    return (
      <Layout>
        <section className="text-base font-normal font-lato bg-navy absolute top-2rem bottom-2rem left-2rem right-2rem z-10  shadow-multi2xl">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="py-12 px-5 flex flex-col h-full"
          >
            <div className=" mb-3">
              <input
                type="text"
                name="name"
                className="py-2 px-3 text-bold-gray rounded-lg bg-black-light border-lime border w-full h-10"
                placeholder="Name"
              />
            </div>
            <div className=" mb-3">
              <input
                type="text"
                name="email"
                className="py-2 px-3 text-bold-gray rounded-lg bg-black-light border-lime border w-full h-10"
                placeholder="E-mail"
              />
            </div>
            <div className=" mb-3">
              <input
                type="text"
                name="company"
                className="py-2 px-3 rounded-lg text-bold-gray bg-black-light border-lime border w-full h-10"
                placeholder="Company name"
              />
            </div>
            <div className=" mb-3">
              <label className="text-lime">
                The service you need:
                <select className="py-2 text-bold-gray px-3 mt-1 rounded-lg bg-black-light border-lime border w-full h-10">
                  <option value="website dev">Develop a Website</option>
                </select>
              </label>
            </div>
            <div className=" mb-3">
              <label className="text-lime">
                Due date:
                <input
                  name="due_date"
                  type="date"
                  className=" text-bold-gray py-2 px-3 mt-1 block rounded-lg bg-black-light border-lime border w-full h-10"
                />
              </label>
            </div>
            <div className=" mb-3 ">
              <label className="text-lime relative">
                Budget:
                <input
                  onChange={this.handleBudgetChange}
                  type="range"
                  name="budget"
                  min="100"
                  max="10000"
                  step="100"
                  className={classNames("mt-1 w-full h-10")}
                />
      
                <span className="absolute top-0  right-0 text-bold-gray">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                  }).format(budget) || "Unknown"}
                </span>
              </label>
           
            </div>
            <div className="flex-1 mb-3">
              <textarea
                name="project_details"
                className="text-sm h-full text-bold-gray py-2 px-3 rounded-lg bg-black-light border-lime border w-full h-full"
                placeholder="Tell me more about the project"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className=" px-1 rounded-lg text-navy border-2 border-lime w-16 uppercase bg-lime "
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </Layout>
    )
  }
}
export default Contact
