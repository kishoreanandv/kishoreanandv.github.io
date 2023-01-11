import {
  faCss3,
  faGithub,
  faHtml5,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const skills = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faHtml5} />,
    name: 'Html5',
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faCss3} />,
    name: 'Css3',
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faJs} />,
    name: 'JavaScript',
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon={faReact} />,
    name: 'React',
  },
  {
    id: 5,
    icon: <FontAwesomeIcon icon={faGithub} />,
    name: 'GitHub',
  },
]

export default skills
