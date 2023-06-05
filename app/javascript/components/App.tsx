import * as React from "react"
import * as ReactDOMClient from 'react-dom/client'

import Homepage from './Homepage'

const container = document.getElementById('app')

const root = ReactDOMClient.createRoot(container!)
root.render(<Homepage />)
