// @flow
import {actions, reducer, initialState} from '../User'

describe('State/User', () => {
  test('actions.setUser()', () => {
    const user = {
      id: 'test-user',
      email: 'awesome@ecliptic.io',
      displayName: 'Awesome Developer',
      photo: 'http://placekitten.com/200/300',
    }
    const result = reducer(initialState, actions.setUser(user))
    expect(result).toEqual(user)
  })
})
