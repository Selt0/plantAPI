const express = require('express')
const app = express()
const PORT = 8000

const plants = {
		"Money Tree": {
			"light":
				'Position your Money Tree in medium to bright indirect light, turning it every time you water it for even growth and leaf development. This plant will also adapt to low and fluorescent lights.',
			"water":
				'Your Money Tree prefers deep but infrequent watering. Water your Money Tree when the top 50%-75% of the soil is dry. Water the plant until it runs from the drainage holes and discard any excess water from the saucer. To prevent root rot, make sure your plant is never standing in water. Be sure to turn your Money Tree each time you water to allow for even growth and leaf development. Your Money Tree requires less water in the winter months when growth slows. ',
			"humidity":
				'Your Money Tree prefers a bit of extra humidity so make sure you increase the humidity in the winter months with a pebble tray or a humidifier. It will also appreciate regular misting year-round using a Mister.',
			"temperature":
				'Your Money Tree is most comfortable in temperatures between 65-80 degrees.',
			"food":
				'Feed once a month in the spring and summer when it is producing new leaves with a water-soluble, well-balanced plant food at half the recommended strength. No fertilizer is necessary during the winter when plant growth naturally slows. Always make sure the soil is damp before applying any fertilizer.',
			"toxicity":
				'Your Money Tree plant is safe for pets, according to the ASPCA.',
			"additionalInfo":
				'Try not to move your Money Tree very often, they prefer to stay in the same spot. If you do need to relocate, you may see a bit of leaf drop. Not to worry—it will adjust. If you need to trim your Money Tree, be sure to use clean, sharp Plant Snips.'
		},
		"Dracaena Elegance": {
			"light":
				"Your dracaena can be placed in low to indirect light. Too little light and the foliage will yellow and growth will slow. Too much light and the foliage will burn.",
			"water":
				"Water when 75% of the soil volume is dry. The leading issue with dracaenas is root rot, so keep on the dry side. Always water until you see it flow out of the drainage hole and discard the excess water in the saucer.",
			"humidity":
				"Dracaenas do well in average household humidity.",
			"temperature":
			 	"Your Dracaena will thrive in average room temperatures, between 60-80°F.",
			"food":
				"The dracaena is slow-growing and does not need much fertilizer. Feed once a month in the spring and summer with general purpose plant food, diluted to half-strength. No fertilizer is necessary during the fall and winter when plant growth naturally slows. Always make sure the soil is damp before applying any fertilizer.",
			"toxicity":
				"Dracaenas are toxic to humans and pets if ingested.",
			"additionalInfo":
				"Look out for a common problem called ‘tipping’ when the tips of the leaves dry out and turn brown. The most common cause is tap water, which contains salts, chlorine, fluoride, and other elements that may be harmful in excess. To prevent this, you can use distilled water or rainwater.",
		},
		"Monstera": {
			"light":
				"Your Monstera can grow just about anywhere in your home! It tolerates low light, but grows faster and becomes more dramatic in a spot with indirect bright light. That said, avoid strong, direct sunlight because it may burn the leaves. If you don’t have a location with ideal lighting for your Monstera, use a Grow Light.",
			"water":
				"Water your Monstera when the top 50–75% of the soil is dry. Water until liquid flows through the drainage hole at the bottom of the pot and discard any water that has accumulated in the saucer.",
			"humidity":
				"This plant will thrive in almost any environment, but if you want to give it a special treat, gently mist it once a week using a Mister. It’s best to mist your Monstera in the morning so the water has plenty of time to evaporate before evening.",
			"temperature":
			 	"Normal room temperatures between 60–80 degrees are great for your Monstera. It will not tolerate temperatures under 55 degrees or sudden drops in temperature. Avoid cold drafts and direct airflow from heaters in the winter months.",
			"food":
				"For best results, feed your plant once a month throughout the spring and summer. A little bit of food will go a long way to encourage growth and root health. No fertilizer is necessary during the winter—it’s important to give your Monstera a chance to rest during the cooler time of year.",
			"toxicity":
				"Monstera leaves are mildly toxic to pets and humans. Typically, ingestion will cause mouth and stomach irritation and possible vomiting.",
			"additionalInfo":
				"Large leaves can collect dust. If you notice the leaves are dirty or dusty, wipe the leaves with Microfiber Dusting Gloves to keep them clean and healthy. In the wild, Monstera plants like to climb. To encourage your Monstera to climb upwards, you can stake wild offshoots with a dowel or use a moss pole. To trim your Monstera, be sure to use clean, sharp Plant Snips.",
		},
		"Peace Lily": {
			"light":
				"Your peace lily will do best in bright indirect light and can adapt to lower light. Too much bright light will burn the foliage. Too little light and the plant will not produce flowers and foliage growth will slow.",
			"water":
				"Water when 50% of the soil volume is dry. If the plant gets too dry it will dramatically wilt, but a good watering should perk it back up. Water thoroughly until you see it flow out of the drainage and discard excess water in the saucer.",
			"humidity":
				"Your peace lily prefers a humid environment. Place a humidifier nearby or use a pebble tray.",
			"temperature":
			 	"Your peace lily prefers average room temperatures from 60-80°F. They are sensitive to sudden changes in temperature, so keep away from drafty areas and open vents.",
			"food":
				"Use a general houseplant fertilizer every month during the spring and summer. No fertilizer is necessary if the plant is not putting out new growth.",
			"toxicity":
				"Peace Lily is considered to be toxic to animals and humans if ingested.",
			"additionalInfo":
				"",
		},
		"Rabbit Foot Fern": {
			"light":
				"Place your Rabbit Foot Fern in low to indirect bright light. Too little light and growth with slow, but too much light can burn the foliage.",
			"water":
				"Water when 50% of the soil volume is dry. Water thoroughly until it flows out of the drainage hole. Discard any excess water in the saucer to avoid root rot.",
			"humidity":
				"Your fern does fine in average household humidity, but won’t mind added humidity if leaves begin to crisp.",
			"temperature":
			 	"Prefers temperatures between 60-75°F.",
			"food":
				"Fertilize once a month during the growing season with a well-balanced fertilizer. No fertilizer is needed during dormancy.",
			"toxicity":
				"The Rabbit Foot Fern is non-toxic to humans and pets.",
			"additionalInfo":
				"You can propagate your Rabbit Foot Fern by cutting off a 1-2” section of fuzzy rhizome, preferably one with a frond or two. Place the cutting in a pot with a peat-based soil mix or sphagnum moss. Keep the growing medium moist and place in a warm humid spot.",
		},
		"Silver Lady Fern": {
			"light":
				"Your fern prefers bright indirect light. Avoid direct sunlight, which can scorch the foliage, or too little light which causes slow growth.",
			"water":
				"Your fern prefers its soil to be kept moist–never wet or soggy. Water when 25% of the soil volume has dried out. Always water thoroughly until water flows out of the drainage hole and discard any water left in the saucer.",
			"humidity":
				"Your fern will do just fine in average household humidity, but crispy brown tips can indicate the humidity is too low. In this case, add a pebble tray or place a humidifier nearby.",
			"temperature":
			 	"Your fern will thrive in average room temperatures between 60-80°F. Avoid placing it near forced-air vents or drafty doors and windows.",
			"food":
				"For best results, use a general houseplant fertilizer diluted to half the recommended strength once a month during the spring and summer. Never apply fertilizer to dry soil; make sure the soil is moist before fertilizing.",
			"toxicity":
				"Your fern is non-toxic and pet-friendly.",
			"additionalInfo":
				"Regularly remove any dead fronds from your plant to encourage lush new growth. Cut stems close to the soil line with clean, sharp snips.",
		},
		"Burgundy Rubber Tree": {
			"light":
				"Your Ficus prefers bright indirect light. Direct sun may burn the leaves.",
			"water":
				"Water when the top 50%-75% of the soil is dry. Water until liquid flows through the drainage hole at the bottom of the pot and discard any water that has accumulated in the saucer.",
			"humidity":
				"As a native to the tropics, your Rubber Tree will appreciate you misting its leaves to increase humidity—especially when it gets very warm in the summer. Misting regularly also helps to keep mites (damaging insects) from making themselves at home on the leaves",
			"temperature":
			 	"The Burgundy Rubber Tree enjoys average room temperatures of 65-78 degrees. Avoid temperatures below 55 degrees, sudden temperature drops, or cold drafts.",
			"food":
				"Feed once a month during the spring and summer with a liquid fertilizer for indoor plants.",
			"toxicity":
				"Rubber Tree leaves are mildly toxic to humans and pets. Typically, ingestion will cause mouth and stomach irritation and possible vomiting.",
			"additionalInfo":
				"Ficus plants are sensitive to being moved. If you have to move your plant around, do so gradually. Any sudden changes can cause leaves to drop. When pruning your plant, be careful of the milky latex substance that may leak out where cuts have occurred–this is a mildly toxic irritant. If you get the sap on your hands or skin, wash with warm water and soap immediately.",
		},
		"Ficus Altissima": {
			"light":
				"Keep your ficus in bright indirect light. This plant will not tolerate low light and variegation will fade. An eastern window or just a few feet back from a southern or western window is ideal.",
			"water":
				"Water when 50-75% of the soil volume is dry. Always water thoroughly until it flows out of the drainage hole to encourage a healthy root system. Discard any excess water in the saucer.",
			"humidity":
				"The Ficus Altissima does fine in average humidity, but mind the extra humidity boost.",
			"temperature":
			 	"Your Ficus Altissima enjoys average room temperatures of 60-80°F. Avoid drafty areas or open vents.",
			"food":
				"For best results, feed your ficus once a month from spring through summer with a general houseplant fertilizer for indoor plants.",
			"toxicity":
				"Your Ficus is mildly toxic to humans and pets if ingested.",
			"additionalInfo":
				"When pruning your plant, make sure to watch out for the milky latex substance that could leak out where cuts have occurred–this is a mildly toxic irritant. If you get the sap on your hands or skin, wash with warm water and soap immediately.",
		},
		"Not Available":
			"Sorry, this plant hasn't been added yet."
}


app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
		const plantName = req.params.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
		if (plants[plantName]){
			res.json(plants[plantName])
		} else {
			res.json(plants['Not Available'])
		}
	}
)

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`)
})
