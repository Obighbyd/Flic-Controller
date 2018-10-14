const { map } = require('rxjs/operators')
const { ofRequestType } = require('@ghadyani-framework/websocket')

const {
	RECORD_BUTTON_PRESS_SET,
	recordButtonPressSet,
} = require('./actions')

const requestsEpic = (
	action$,
) => (
	action$
	.pipe(
		ofRequestType(RECORD_BUTTON_PRESS_SET),
		map(({
			buttonId,
			pressSet,
		}) => ({
			buttonId,
			pressSet,
		})),
		map(recordButtonPressSet),
	)
)

module.exports = requestsEpic
