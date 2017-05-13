import AV from '../lib/leancloud'
export default function(user) {
    var { id, attributes: { username } } = user || AV.User.current() || { attributes: {} }
    return {
        // 不能让data中的属性值为undefined或null，否则报错。原因似乎与Object.defineProperty有关
        id: id || '',
        username: username || ''
    }
}