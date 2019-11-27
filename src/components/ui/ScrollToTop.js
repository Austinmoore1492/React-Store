import { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
  /*Brings webpage back to top if navigating to a different page. 
  navigating from the bottom of the landing page will bring you to the bottom 
  of the next page. This fixes that issue.
  */
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
