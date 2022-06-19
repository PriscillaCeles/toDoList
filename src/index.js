import { Container } from './components/Container/index.js'

const $root = document.getElementById("root")

const input = document.createElement('input')

const props = {
  children: input
}

const container = Container(props)

$root.appendChild(container)