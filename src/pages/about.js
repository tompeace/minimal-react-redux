import { Fragment } from "react"
import PageTitle from "@/components/page-title"

export default function About(props) {
  return (
    <Fragment>
      <PageTitle>
        About
      </PageTitle>
      <div>
        <p className="py-8">
          2021 React App boilerplate
        </p>
      </div>
    </Fragment>
  )
}