import User from '../models/users.js'


const testUser = {                                  firstname: "Inimfon",                             lastname: "Ebong",                                telephone: '09168848807',                         email: 'ebonginimfon8@gmail.com',
  type: 1,                                          address: "Cross river state"                    }

async function main() {
	const user = await new User(testUser)
	user.save()
	console.log(user)
	console.log(await User.find({}))
}

main()
