#🎨 CoCo Fine Art Website

This is a test website designed for my dad,
who is the owner of CoCo Fine Art wrokspace.

He is a great art teacher but a dummy when it comes to tech-related stuff.
So I hope I can build it as intuituve as sth even the amoebasssss can work on. 

如果做得夠好，希望可以在 5/18送給他當生日禮物。

##Project Structure 

CoCoFineArtWebsite/
├── frontend/
|   ├── public/			#static assets like  images
favicon
|   ├── src/			
|   |   ├── components/		# reusable components (ex. buttons, Navbars, Footer)
|   |   ├── pages/			# page components (logins, signups, Dashboard)
LoginSignupPage, etc
|   |   ├── App.js			# Main stucture (root component), aet up routes
|   |   ├── index.js		# entry point, ，將 <App /> 掛入 HTML 中
|   └── package.json		# frontend dependencies 
							# 記錄使用的套件、版本與啟動腳本
|
├── backend/
|   ├── controllers/		# handle requests and responses ex. authController.js, staffController.js
|   ├── models/				# database models ex. User.js, Staff.js, Request.js
|   ├── routes/				# define API endpoints ex. authRoutes.js, staffRoutes.js
|   ├── app.js				# main server logic
|   ├── .env
|
|   ├── database/
|   |   ├── schema.sql		# SQL schema for the database
|   |   ├── seed.sql		# dummy data setup
|
|   ├── docs/
|   |   └── CoCo_User_Diagram.png
|
├── README.md
├── .gitignore
└── package.json / requirements.txt