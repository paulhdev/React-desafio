import React, { Component } from 'react'
import { FaPencilAlt, FaRegTrashAlt } from 'react-icons/fa'

import { ListStyle, AreaBtn } from './styled'

class List extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nameClient: this.props.data.nameClient
        }
    }

    render() {
        return (
            <div>
                <ListStyle>
                    <li>Ana Paula <AreaBtn>
                        <button>
                            <FaPencilAlt id="updateBtn" />
                        </button>
                        <button>
                            <FaRegTrashAlt id="deleteBtn" />
                        </button>
                    </AreaBtn>
                    </li>
                    <li>Paulo Parser <AreaBtn>
                        <button>
                            <FaPencilAlt id="updateBtn" />
                        </button>
                        <button>
                            <FaRegTrashAlt id="deleteBtn" />
                        </button>
                    </AreaBtn>
                    </li>
                    <li>Carlos Yuri <AreaBtn>
                        <button>
                            <FaPencilAlt id="updateBtn" />
                        </button>
                        <button>
                            <FaRegTrashAlt id="deleteBtn" />
                        </button>
                    </AreaBtn>
                    </li>
                </ListStyle>
            </div>
        )
    }
}

export default List