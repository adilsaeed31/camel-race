const Types = {
	GET_CAMEL_LIST: 'GET_CAMEL_LIST'
}

const getList = lists => ({
	type: Types.GET_CAMEL_LIST,
	lists
})

export default {
	getList,
	Types
}
