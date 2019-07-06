import React from "react"
import Layout from "../components/layout"
import classNames from "classnames"
import styles from "../styles/contact.module.css"

class Contact extends React.Component {
  constructor(props) {
    super(props)
    const today = new Date()
    const twoMosFromToday = new Date(today.setMonth(today.getMonth() + 2)).toISOString().substr(0, 10)

    this.state = {
      budget: 1000,
      dueDate: twoMosFromToday,
    }
  }

  handleBudgetChange = e => this.setState({ budget: e.target.value })
  handleDateChange = e => this.setState({ dueDate: e.target.value })

  render() {
    const { budget } = this.state
    return (
      <Layout>
        <section className="justify-center flex flex-col text-base font-normal font-lato bg-navy absolute top-2rem bottom-2rem left-2rem right-2rem z-10  shadow-multi2xl h-auto">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="mx-5 flex flex-col "
          ><div className="mb-3 text-center">
             <h1 className={classNames("text-lime font-extrabold tracking-wider uppercase")}>Get in touch</h1></div> 
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="shadow-xl py-2 px-3 text-bold-gray rounded-lg bg-black-light border-lime border w-full h-10"
                placeholder="Name"
              />
            </div>
            <div className=" mb-3">
              <input
                type="text"
                name="email"
                className="shadow-xl py-2 px-3 text-bold-gray rounded-lg bg-black-light border-lime border w-full h-10"
                placeholder="E-mail"
              />
            </div>
            <div className=" mb-3">
              <input
                type="text"
                name="company"
                className="shadow-xl py-2 px-3 rounded-lg text-bold-gray bg-black-light border-lime border w-full h-10"
                placeholder="Company name"
              />
            </div>
            <div className=" mb-3">
              <label className="text-lime">
                The service you need:
                <select className={classNames(styles.select)}>
                  <option value="website dev">Develop a Website</option>
                </select>
              </label>
            </div>
            <div className=" mb-3">
              <label className="text-lime">
                Due date:
                <input
                  onChange={this.handleDateChange}
                  name="due_date"
                  type="date"
                  className={classNames(styles.date)}
                  value={this.state.dueDate}
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
                  value={this.state.budget}
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
            <div className=" mb-3">
              <textarea
        rows="5"        
        name="project_details"
                className="resize-none shadow-xl text-sm text-bold-gray py-2 px-3 rounded-lg bg-black-light border-lime border w-full h-full"
                placeholder="Tell me more about the project"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="shadow-xl px-1 rounded-lg text-navy border-2 border-lime w-16 uppercase bg-lime "
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
