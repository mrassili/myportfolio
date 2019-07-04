import React from "react"
import Layout from "../components/layout"
import classNames from "classnames"
import '../styles/contact.module.css'

const Contact = () => (
  <Layout>
    <section className="text-base font-normal font-lato bg-navy absolute top-2rem bottom-2rem left-2rem right-2rem z-10  shadow-multi2xl">
      <form className="flex flex-col h-full">
        <div className="px-5 mb-3">
          <input className="py-2 px-3 rounded-lg bg-black-light border-lime border w-full h-10" placeholder="Name" />
        </div>
        <div className="px-5 mb-3">
          <input className="py-2 px-3 rounded-lg bg-black-light border-lime border w-full h-10" placeholder="E-mail" />
        </div>
        <div className="px-5 mb-3">
          <input className="py-2 px-3 rounded-lg bg-black-light border-lime border w-full h-10" placeholder="Company name" />
        </div>
        <div className="px-5 mb-3">
          <label className="text-lime">
            The service you need:
            <select className="py-2 px-3 mt-1 text-light-gray rounded-lg bg-black-light border-lime border w-full h-10">
              <option>Develop a Website</option>
            </select>
          </label>
        </div>
        <div className="px-5 mb-3">
          <label className="text-lime">
            Due date:
            <input
              type="date"
              className="py-2 px-3 mt-1 text-light-gray rounded-lg bg-black-light border-lime border w-full h-10"
            />
          </label>
        </div>
        <div className="px-5 mb-3">
          <label className="text-lime">
            Budget:
            <input
              type="range"
              name="budget"
              min="200"
              max="20000"
              className={classNames("mt-1 w-full h-10")}
            />
          </label>
        </div>
        <div className="px-5">
  
          <textarea className="py-2 px-3 rounded-lg bg-black-light border-lime border w-full h-10" placeholder="Tell me more about the project" />
  </div>
      </form>
    </section>
  </Layout>
)

export default Contact
