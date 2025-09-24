import { ClickToCHangeColor } from './click-to-change-color/optimized'
import { StateUpdateInBatch } from './state-update-batching'
import { PiaChart } from './pia-chart'
import { TabForm } from './tab-form'
import { Pagination } from './pagination'
import { AutoCompleteSearch } from './auto-search'
import { FolderStructure } from './folder-structure'
import { ValidParenthesis } from './valid-parenthesis'
import { ProgressBar } from './progress-bar'
import { Loader } from './loader'
import { TicTacToe } from './tic-tac-toe'
import { Elevator } from './elevator'
import { FlipCard } from './card-flip'
import { withObserver } from './hoc'


export const FEATURE = [
  {
    name: "Click to Change Color",
    desc: "Create an N x M grid where clicking a cell changes its background color. Also, add a button that resets the background colors to their initial state in reverse order, one by one.",
    component: ClickToCHangeColor,
  },
  {
    name: "Pia Chart",
    desc: "",
    component: PiaChart,
  },
  {
    name: "State Update In Batch",
    desc: "",
    component: StateUpdateInBatch,
  },
  {
    name: "Tab Form",
    desc: "",
    component: TabForm,
  },
  {
    name: "Pagination",
    desc: "Get data from a API and render the content in table, supporting pagination and sorting.",
    challenges: [
      "Configurable sorting added to all columns.",
      "Configurable filtering enabled for all columns.",
      "Styling enhancements with support for custom style configurations.",
      "Make column order configurable",
      "Error Handling and user experience",
      "Performance optimizations for improved table efficiency."
    ],
    component: Pagination,
  },
  {
    name: "Auto Complete Search",
    desc: "",
    component: AutoCompleteSearch,
  },
  {
    name: "Folder Structure",
    desc: "",
    component: FolderStructure,
  },
  {
    name: "Valid Parenthesis",
    desc: "",
    component: ValidParenthesis,
  },
  {
    name: "Progress bar",
    dec: "",
    component: ProgressBar,
  },
  {
    name: "Loader",
    dec: "",
    component: Loader,
  },
  {
    name: "Tic Tac Toe",
    desc: "",
    component: TicTacToe,
  },
  {
    name: "Elevator",
    des: "",
    component: Elevator,
  },
  {
    name: "Flip Card",
    des: "",
    component: FlipCard,
  },
].map(item => ({ ...item, component: withObserver(item.component) }));


/**
 * Pagination Component Improvement
 * 1. Add sorting to all possible column and make it configurable
 * 2. Add filter for all column and make it configurable
 * 3. Improve styling and make some custom configuration for style
 * 4. Optimization Table by checking performance
 */