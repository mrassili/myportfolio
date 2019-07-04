import React from "react"
import Layout from "../components/layout"
import styles from "../styles/home.module.css"
import classNames from "classnames"
import { CSSTransition } from "react-transition-group"
import "../styles/menu-transition.css"
import "animate.css"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.menuIconRef = React.createRef()
    this.state = {
      isMenuOpen: false,
    }
  }

  expandMenu() {
    this.setState({ isMenuOpen: true })
  }

  collapseMenu() {
    this.setState({ isMenuOpen: false })
  }

  render() {
    // transition smoothly / slide the expand menu
    const { top, left, width } = this.menuIconRef.current
      ? this.menuIconRef.current.getBoundingClientRect()
      : { top: 1, left: 2, width: 4 }
    const iconStyle = {
      position: "absolute",
      top,
      right: `calc(100vw - ${left}px - ${width}px)`,
    }

    const transitionClasses = {
      enter: "animated faster",
      enterActive: "slideInRight",
      exit: "animated faster",
      exitActive: "slideOutRight",
    }
    return (
      <Layout>
        <section
          className={classNames(
            "text-base font-lato bg-navy absolute top-2rem bottom-2rem left-2rem right-2rem z-10 flex flex-col shadow-multi2xl", {[styles.darkoverlay]: this.state.isMenuOpen}
          )}
        >
          <header className="text-white flex justify-around bg-navier mt-6 p-3">
            <div className="flex items-center">
              <svg
                width="49"
                height="42"
                viewBox="0 0 49 42"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.7917 7H30.625L14.5162 29.1025L9.1875 21L18.375 7H10.2083L1.02083 21L10.2083 35H18.375L34.4837 12.8975L39.8125 21L30.625 35H38.7917L47.9792 21L38.7917 7Z"
                  fill="#2ED573"
                />
              </svg>
            </div>
            <div className="text-xl self-center ml-4 font-bold tracking-wide">
              <span>MRASSILI</span>
            </div>

            <div className="flex items-center ml-auto">
              <svg
                className="fill-current text-white"
                width="35"
                height="29"
                viewBox="0 0 35 29"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path d="M29.9603 14.9759C29.9603 14.8076 29.885 14.6495 29.7548 14.5433L27.2296 12.4982L28.3977 9.4621C28.4579 9.30501 28.4437 9.12982 28.3596 8.98349C28.2754 8.83815 28.131 8.7388 27.9646 8.71238L24.7514 8.20538L24.2439 4.99606C24.218 4.83065 24.1186 4.68531 23.9733 4.60113C23.828 4.51696 23.6533 4.50228 23.4952 4.56345L20.4596 5.72816L18.413 3.20201C18.2006 2.94019 17.7602 2.94117 17.5488 3.20201L15.5017 5.72865L12.4651 4.56394C12.3081 4.50277 12.1324 4.51745 11.988 4.60162C11.8412 4.68579 11.7423 4.83065 11.7159 4.99655L11.2084 8.20587L7.99567 8.71287C7.83027 8.73929 7.68492 8.83815 7.60075 8.98398C7.51755 9.13031 7.50336 9.30501 7.56356 9.46259L8.7317 12.4987L6.20701 14.5438C6.07536 14.6495 6 14.8076 6 14.9764C6 15.1452 6.07536 15.3028 6.20701 15.409L8.7317 17.4546L7.56356 20.4907C7.50336 20.6463 7.51755 20.823 7.60075 20.9688C7.68492 21.1141 7.83027 21.2145 7.99567 21.2409L11.2084 21.7469L11.7159 24.9577C11.7423 25.1231 11.8417 25.2685 11.988 25.3526C12.1324 25.4368 12.3066 25.451 12.4642 25.3903L15.5017 24.2261L17.5483 26.7517C17.654 26.8829 17.8121 26.9578 17.9809 26.9578C18.1483 26.9578 18.3073 26.8829 18.413 26.7522L20.4596 24.2261L23.4962 25.3903C23.6508 25.451 23.828 25.4368 23.9733 25.3526C24.1186 25.2685 24.218 25.1231 24.2439 24.9577L24.7514 21.7469L27.9646 21.2409C28.131 21.2145 28.2754 21.1141 28.3596 20.9688C28.4437 20.823 28.4579 20.6478 28.3977 20.4907L27.2296 17.4541L29.7558 15.4085C29.885 15.3013 29.9603 15.1442 29.9603 14.9759ZM17.9809 22.7726C13.6749 22.7726 10.1842 19.2804 10.1842 14.9754C10.1842 10.6694 13.6749 7.17867 17.9809 7.17867C22.2869 7.17867 25.7776 10.6694 25.7776 14.9754C25.7776 19.2814 22.2869 22.7726 17.9809 22.7726Z" />
                  <path d="M17.9809 8.15262C14.2186 8.15262 11.16 11.2122 11.16 14.9735C11.16 18.7359 14.2205 21.7949 17.9809 21.7949C18.2877 21.7949 18.5363 21.5463 18.5363 21.239V8.70806C18.5363 8.40171 18.2877 8.15262 17.9809 8.15262Z" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="23.9603"
                      height="23.9598"
                      fill="white"
                      transform="translate(6 3)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex items-center ml-4" ref={this.menuIconRef}>
              <svg
                onClick={() => this.expandMenu()}
                width="35"
                height="29"
                viewBox="0 0 35 29"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.375 21.75H30.625V19.3333H4.375V21.75ZM4.375 15.7083H30.625V13.2917H4.375V15.7083ZM4.375 7.25V9.66667H30.625V7.25H4.375Z"
                  fill="#FFFEFE"
                />
              </svg>
            </div>
          </header>
          <main className="flex flex-row items-center p-6 text-white flex-1">
            <div>
              <h1 className="mb-2 font-light">
                Hey! I&apos;m{" "}
                <span className="font-normal tracking-wide">Marouane</span>
              </h1>
              <h2 className="mb-2 text-xl text-lime font-normal leading-relaxed uppercase">
                I make websites
              </h2>
              <p className="font-light">
                I&apos;m a front-end developer with a passion for the web,
                React.js and Open-source. Currently living in El Jadida,
                Morocco.
              </p>
            </div>
          </main>

          <footer className="text-base">
            <div className={classNames("whitespace-no-wrap mb-8 p-6 bg-navier", styles.grid)}>
              <div className="flex flex-col ">
                <span className="text-lime font-bold">&copy;2019</span>
                <span className="text-white font-light">Marouane Rassili</span>
              </div>
              <div className="flex flex-col ">
                <span className="text-lime font-bold">Contact</span>
                <span className="text-white font-light">hi@mrassili.com</span>
              </div>

              <div className="flex flex-col ">
                <span className="text-lime font-bold">Social</span>
                <span className="text-white font-light">Twitter / Github</span>
              </div>

              <div className="flex flex-col ">
                <span className="text-lime font-bold">Legal</span>
                <span className="text-white font-light">Privacy Policy</span>
              </div>
            </div>
          </footer>
        </section>
        <CSSTransition
          in={this.state.isMenuOpen}
          timeout={300}
          classNames={transitionClasses}
          unmountOnExit
          id={0}
        >
          <div className="font-lato outline-modal absolute w-65-screen h-screen top-0 right-0 z-30 bg-navy">
            <div className="flex items-center" style={iconStyle}>
              <svg
                className="stroke-current text-lime"
                onClick={() => this.collapseMenu()}
                width="35"
                height="42"
                viewBox="0 0 35 29"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.64586 3.40754L30.2359 25.6725"
                  strokeWidth="4"
                ></path>
                <path d="M4.44 25.8659L29.8564 3.5858" strokeWidth="4"></path>
              </svg>
            </div>
            <div className="text-white flex flex-col mt-40 text-xl h-half-full">
              <div
                className={classNames(
                  "bg-navier h-14 flex items-center justify-center relative mb-3",
                  styles.vbar,
                )}
              >
                <a href="#">Home</a>
              </div>

              <div
                className={classNames(
                  "bg-navier h-14 flex items-center justify-center relative mb-3",
                  styles.vbar,
                )}
              >
                <a href="#">Portfolio</a>
              </div>
              <div
                className={classNames(
                  "bg-navier h-14 flex items-center justify-center relative mb-3",
                  styles.vbar,
                )}
              >
                <a href="#">Blog</a>
              </div>
              <div
                className={classNames(
                  "bg-navier h-14 flex items-center justify-center relative mb-3",
                  styles.vbar,
                )}
              >
                <a href="#">About</a>
              </div>
              <div
                className={classNames(
                  "bg-navier h-14 flex items-center justify-center relative mb-3",
                  styles.vbar,
                )}
              >
                <a href="#">Contact</a>
              </div>
            </div>
          </div>
        </CSSTransition>
      </Layout>
    )
  }
}

export default Home
