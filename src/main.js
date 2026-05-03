import './style.css'

import { setPostPage } from './postsPage'
import { getUserData } from './services/userServices'

setPostPage()
getUserData(1).then(item => console.log(item))