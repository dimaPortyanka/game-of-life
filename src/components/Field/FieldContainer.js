import {
  compose,
  withStateHandlers,
  withHandlers,
  lifecycle,
} from 'recompose'

import { init, next } from 'services/gameOfLife'

import Field from './Field'

let interval

export default compose(
  withStateHandlers(() => ({
    lifeMatrix: init(),
  }), {
    restart: () => () => ({
      lifeMatrix: init(),
    }),
    update: ({ lifeMatrix }) => () => ({
      lifeMatrix: next(lifeMatrix),
    }),
  }),
  withHandlers({
    startTimer: ({ update }) => () => {
      clearInterval(interval)
      interval = setInterval(() => {
        update()
      }, 1000)
    },
  }),
  withHandlers({
    restart: ({ restart, startTimer }) => () => {
      startTimer()
      restart()
    },
  }),
  lifecycle({
    componentDidMount() {
      alert('Click on a game of life field to restart.')
      this.props.startTimer()
    },
    componentWillUnmount() {
      clearInterval(interval)
    },
  })
)(Field)
