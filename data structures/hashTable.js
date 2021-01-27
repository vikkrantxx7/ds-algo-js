class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    _hash = key => {
        const ANY_PRIME = 31
        const length = this.keyMap.length
        let total = 0

        for (let i = 0; i < Math.min(key.length, 99); i++) {
            total = total * ANY_PRIME + key.charCodeAt(i)
        }

        return total % length
    }

    set = (key, val) => {
        const index = this._hash(key)
        const current = this.keyMap[index]
        const isUpdated = current?.some(value => {
            const isMatch = value[0] === key
            isMatch && (value[1] = val)
            return isMatch
        })
        if (isUpdated) {
            return this
        }
        const newVal = [key, val]

        this.keyMap[index] = current ? current.push(newVal) && current : [newVal]
        return this
    }

    get = key => {
        const index = this._hash(key)

        if (!this.keyMap[index]) {
            return undefined
        }
        const val = this.keyMap[index].find(val => {
            return val[0] === key
        })

        return val ? val[1] : val
    }

    keys = () => {
        return this.keyMap.reduce((acc, val) => {
            if (val) {
                val.forEach(element => {
                    acc.push(element[0])
                });
            }
            return acc
        }, [])
    }

    values = () => {
        return this.keyMap.reduce((acc, val) => {
            if (val) {
                val.forEach(element => {
                    !acc.includes(element[1]) && acc.push(element[1])
                });
            }
            return acc
        }, [])
    }
}