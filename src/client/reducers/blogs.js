// App Imports
import {
    ACTION_TYPE_BLOGS_FETCH,
    ACTION_TYPE_BLOGS_FETCHING,
    ACTION_TYPE_BLOG_FETCH,
    ACTION_TYPE_BLOG_FETCHING
} from '../actions/blog'

export function blogs(state = { list: [], error: false, loading: false }, action = {}) {
    switch (action.type) {

        case ACTION_TYPE_BLOGS_FETCHING:
            return Object.assign({}, state, {
                list: [],
                error: false,
                loading: true
            })

        case ACTION_TYPE_BLOGS_FETCH:
            return Object.assign({}, state, {
                list: action.blogs,
                error: action.error,
                loading: false
            })

        default:
            return state
    }
}

export function blog(state = { details: {}, error: false, loading: false }, action = {}) {
    switch (action.type) {

        case ACTION_TYPE_BLOG_FETCHING:
            return Object.assign({}, state, {
                details: {},
                error: false,
                loading: true
            })

        case ACTION_TYPE_BLOG_FETCH:
            return Object.assign({}, state, {
                details: action.blog,
                error: action.error,
                loading: false
            })

        default:
            return state
    }
}