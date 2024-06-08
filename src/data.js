const priceDetails = [
    {
        name: "Free",
        price: 0,
    },
    {
        name: "Gold",
        price: 100,
    },
    {
        name: "Platinum",
        price: 200,
    },
    {
        name: "Enterprise",
        price: 300,
    },
]

export const productDetails = [
    {
        id: 'summer-jubilee',
        title: 'Summer Jubilee',
        caption: 'Oil on canvas, 80" × 64"',
        src: 'https://images.saatchiart.com/saatchi/1153088/art/5442177/4511989-HSC00001-7.jpg',
        price: 12000,
        },
        {
        id: 'spectacular-end',
        title: 'A Spectacular End',
        caption: 'Oil on canvas, 40" × 32"',
        src: 'https://www.shutterstock.com/shutterstock/photos/2363437103/display_1500/stock-vector-geometric-abstract-triangles-pattern-afro-style-seamless-vector-image-2363437103.jpg',
        price: 4000,
        },
        {
        id: 'crossing-the-chasm',
        title: 'Crossing The Chasm',
        caption: 'Oil on canvas, 32" × 24"',
        src: 'https://www.shutterstock.com/shutterstock/photos/1786759748/display_1500/stock-vector-seamless-abstract-doodle-background-pattern-in-bright-summer-positive-colors-hand-drawn-abstract-1786759748.jpg',
        price: 3600,
        },
        {
        id: 'underneath',
        title: 'Underneath',
        caption: 'Oil on canvas, 40" × 32"',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR10P8uzaTwahCH4GojfhmDlxVIQRt1ykCFj2pIUhHr9GEY-ox1G6_niifRhO16GKy6y1Q',
        price: 3000,
        },
        {
        id: 'it-is-what-it-is',
        title: 'It Is What It Is',
        caption: 'Oil on canvas, 40" × 32"',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZLKhseDH7tYVxD4e6K5vbn9_DLojWsnqfTlekASjHTYShuMCf5B2jE4IlUVPZm1dQVOo',
        price: 6000,
        },
]

export const details = [
    {
      eventId: 'coffee-with-samantha',
      date: '2023-01-01T12:30:00.000Z',
      metadata: {
        invitees: [
          {
            name: 'Samantha',
            email: 'samboombox123@aol.com',
          },
        ],
      },
    },
    {
      eventId: 'focus-time',
      date: '2023-01-01T15:00:00.000Z',
      metadata: {
        notes: 'Time for me to focus!',
      },
    },
    {
      eventId: 'team-meeting',
      date: '2023-01-02T10:00:00.000Z',
      metadata: {
        notes: 'Weekly team catch-up call!',
        invitees: [
          {
            name: 'Sadb Fabian',
            email: 'sfabian@widgetco.com',
          },
          {
            name: 'Gerarda Nicomedes',
            email: 'gnicomedes@widgetco.com',
          },
          {
            name: 'Sagit Edvaldo',
            email: 'sedvaldo@widgetco.com',
          },
          {
            name: 'Denis Seppo',
            email: 'dseppo@widgetco.com',
          },
        ],
      },
    },
  ]

export const pizzaSizes = [
    { slug: 'sm', label: 'Small (10")' },
    { slug: 'md', label: 'Medium (12")' },
    { slug: 'lg', label: 'Large (14")' },
    { slug: 'xl', label: 'Pizza For Days (16")' },
]

export const pizzaToppings =[
    { slug: 'anchovies', label: 'Anchovies' ,clicked:false },
    { slug: 'mushrooms', label: 'Mushrooms',clicked:false },
    { slug: 'green-pepper', label: 'Green Pepper',clicked:false },
    { slug: 'onions', label: 'Onions',clicked:false },
    { slug: 'pineapple', label: 'Pineapple',clicked:false },
    { slug: 'pepperoni', label: 'Pepperoni',clicked:false },
    { slug: 'sausage', label: 'Sausage',clicked:false },
    { slug: 'chicken', label: 'Chicken',clicked:false },
    { slug: 'bacon', label: 'Bacon',clicked:false },
    { slug: 'feta', label: 'Feta',clicked:false },
    { slug: 'provolone', label: 'Provolone',clicked:false },
    { slug: 'gummy-bears', label: 'Gummy Bears',clicked:false },
    { slug: 'popcorn', label: 'Popcorn',clicked:false },
    { slug: 'lucky-charms', label: 'Lucky Charms',clicked:false },
    { slug: 'ice-cream', label: 'Vanilla Ice Cream',clicked:false},
    { slug: 'cotton-candy', label: 'Cotton Candy' ,clicked:false},
]

export default priceDetails;