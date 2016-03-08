
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import * as TodoActions from '../../actions/todos'
import style from './style.css'



class App extends Component {
  render() {
    const { todos, actions, children, location, dispatch } = this.props
    const { pathname } = location 
    const key = pathname.split('/')[1] || 'root'
    return (
      <div className={style.normal}>
        <ReactCSSTransitionGroup
          component="div" transitionName="swap"
          transitionEnterTimeout={500} transitionLeaveTimeout={500}
        >
          {React.cloneElement(children || <div />,{key:key})}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
