import PropTypes from "prop-types"
import React, { Component } from "react"
import * as Sentry from "@sentry/browser"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { eventId: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo)
      const eventId = Sentry.captureException(error)
      this.setState({ eventId })
    })
  }

  render() {
    if (this.state.hasError) {
      //render fallback UI
      return (
        <button
          onClick={() =>
            Sentry.showReportDialog({ eventId: this.state.eventId })
          }
        >
          Report feedback
        </button>
      )
    }
    //when there's not an error, render children untouched
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ErrorBoundary
