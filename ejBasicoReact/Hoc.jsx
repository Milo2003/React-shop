import React from 'react'
import { render } from 'react-dom'

export function Hoc(WrapperComponent) {
    class Wrapper extends WrapperComponent {
        render() {
            return (
                <WrapperComponent {... this.props} />
            )
        }
    }
    return Wrapper;
}
