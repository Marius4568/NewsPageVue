import { v4 as uuidv4 } from "uuid";

export const newsCategories = [
  {
    id: uuidv4(),
    title: "All",
    path: "all",
  },
  {
    id: uuidv4(),
    title: "Politics",
    path: "politics",
  },
  {
    id: uuidv4(),
    title: "Business",
    path: "business",
  },

  {
    id: uuidv4(),
    title: "Tech",
    path: "tech",
  },
  {
    id: uuidv4(),
    title: "Arts",
    path: "arts",
  },
  {
    id: uuidv4(),
    title: "Science",
    path: "science",
  },
  {
    id: uuidv4(),
    title: "Health",
    path: "health",
  },
  {
    id: uuidv4(),
    title: "Sports",
    path: "sports",
  },
];

export const articles = [
  {
    id: "uuidv4()",
    category: "arts",
    imgSource:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    title: "Corvus brachyrhynchos",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    date: "8/19/2021",
    author: {
      name: "Filberte Farries",
      occupation: "Recruiting Manager",
      image: "http://dummyimage.com/157x100.png/cc0000/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "arts",
    imgSource:
      "https://images.unsplash.com/photo-1593073862407-a3ce22748763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    title: "Spermophilus richardsonii",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    date: "10/27/2021",
    author: {
      name: "Mina Zavattari",
      occupation: "Professor",
      image: "http://dummyimage.com/183x100.png/5fa2dd/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "business",
    imgSource:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Odocoileus hemionus",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    date: "12/19/2021",
    author: {
      name: "Emanuel Trimby",
      occupation: "Database Administrator I",
      image: "http://dummyimage.com/131x100.png/dddddd/000000",
    },
  },
  {
    id: "uuidv4()",
    category: "arts",
    imgSource:
      "https://images.unsplash.com/photo-1597423244037-519742d0a9f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    title: "Tapirus terrestris",
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    date: "10/9/2021",
    author: {
      name: "Dian Joriot",
      occupation: "Nuclear Power Engineer",
      image: "http://dummyimage.com/228x100.png/dddddd/000000",
    },
  },
  {
    id: "uuidv4()",
    category: "business",
    imgSource:
      "https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "Coluber constrictor foxii",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    date: "11/22/2021",
    author: {
      name: "Roselin Audibert",
      occupation: "Clinical Specialist",
      image: "http://dummyimage.com/118x100.png/5fa2dd/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "business",
    imgSource:
      "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=854&q=80",
    title: "Neotis denhami",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    date: "10/26/2021",
    author: {
      name: "Cris Tilling",
      occupation: "Analyst Programmer",
      image: "http://dummyimage.com/239x100.png/dddddd/000000",
    },
  },
  {
    id: "uuidv4()",
    category: "science",
    imgSource:
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2NpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    title: "Sauromalus obesus",
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    date: "2/2/2022",
    author: {
      name: "Yanaton Carass",
      occupation: "Legal Assistant",
      image: "http://dummyimage.com/127x100.png/ff4444/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "arts",
    imgSource:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    title: "Corvus brachyrhynchos",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    date: "9/14/2021",
    author: {
      name: "Anne-marie Verick",
      occupation: "Nurse Practicioner",
      image: "http://dummyimage.com/183x100.png/ff4444/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "business",
    imgSource:
      "https://images.unsplash.com/photo-1482440308425-276ad0f28b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Rhabdomys pumilio",
    description:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    date: "11/23/2021",
    author: {
      name: "Frank Joselevitch",
      occupation: "Junior Executive",
      image: "http://dummyimage.com/115x100.png/dddddd/000000",
    },
  },
  {
    id: "uuidv4()",
    category: "health",
    imgSource:
      "https://images.unsplash.com/photo-1657299143549-73fb118d68aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8aGVhbHRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    title: "Laniaurius atrococcineus",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    date: "3/9/2022",
    author: {
      name: "Rollie Towersey",
      occupation: "VP Product Management",
      image: "http://dummyimage.com/113x100.png/ff4444/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "arts",
    imgSource:
      "https://images.unsplash.com/photo-1621886292650-520f76c747d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    title: "Macropus agilis",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    date: "6/5/2022",
    author: {
      name: "Huey McGurn",
      occupation: "Design Engineer",
      image: "http://dummyimage.com/190x100.png/ff4444/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "tech",
    imgSource:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    title: "Pandon haliaetus",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    date: "6/26/2022",
    author: {
      name: "Rodolphe Heindl",
      occupation: "Occupational Therapist",
      image: "http://dummyimage.com/183x100.png/dddddd/000000",
    },
  },
  {
    id: "uuidv4()",
    category: "arts",
    imgSource:
      "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    title: "Sylvicapra grimma",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    date: "8/13/2021",
    author: {
      name: "Thorny Wittke",
      occupation: "Registered Nurse",
      image: "http://dummyimage.com/128x100.png/ff4444/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "sports",
    imgSource:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    title: "Oryx gazella",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    date: "9/17/2021",
    author: {
      name: "Lorne Casley",
      occupation: "Mechanical Systems Engineer",
      image: "http://dummyimage.com/204x100.png/5fa2dd/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "politics",
    imgSource:
      "https://images.unsplash.com/photo-1575320181282-9afab399332c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Tadorna tadorna",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    date: "6/2/2022",
    author: {
      name: "Marjorie Attree",
      occupation: "Assistant Professor",
      image: "http://dummyimage.com/196x100.png/5fa2dd/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "business",
    imgSource:
      "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    title: "Phascogale calura",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    date: "2/10/2022",
    author: {
      name: "Rowland Meade",
      occupation: "Marketing Assistant",
      image: "http://dummyimage.com/101x100.png/5fa2dd/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "business",
    imgSource:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Cebus nigrivittatus",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    date: "8/18/2021",
    author: {
      name: "Amble Skillington",
      occupation: "Developer I",
      image: "http://dummyimage.com/136x100.png/cc0000/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "tech",
    imgSource:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    title: "Galictis vittata",
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    date: "12/10/2021",
    author: {
      name: "Ariella Zecchi",
      occupation: "Assistant Professor",
      image: "http://dummyimage.com/218x100.png/dddddd/000000",
    },
  },
  {
    id: "uuidv4()",
    category: "arts",
    imgSource:
      "https://images.unsplash.com/photo-1585644198527-05519fdeaf98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    title: "Platalea leucordia",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    date: "4/28/2022",
    author: {
      name: "Juieta Menel",
      occupation: "Senior Quality Engineer",
      image: "http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "science",
    imgSource:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2NpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    title: "Milvus migrans",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    date: "1/13/2022",
    author: {
      name: "Gustie Shann",
      occupation: "Chief Design Engineer",
      image: "http://dummyimage.com/106x100.png/5fa2dd/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "business",
    imgSource:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Paraxerus cepapi",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    date: "5/8/2022",
    author: {
      name: "Benji Feldberg",
      occupation: "Computer Systems Analyst III",
      image: "http://dummyimage.com/169x100.png/dddddd/000000",
    },
  },
  {
    id: "uuidv4()",
    category: "arts",
    imgSource:
      "https://images.unsplash.com/photo-1461344577544-4e5dc9487184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    title: "Phaethon aethereus",
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    date: "10/24/2021",
    author: {
      name: "Marcelle Fautley",
      occupation: "Legal Assistant",
      image: "http://dummyimage.com/137x100.png/dddddd/000000",
    },
  },
  {
    id: "uuidv4()",
    category: "arts",
    imgSource:
      "https://images.unsplash.com/photo-1563775957383-f7b1abbe63ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    title: "Cathartes aura",
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    date: "8/10/2021",
    author: {
      name: "Delmore O'Conor",
      occupation: "Research Nurse",
      image: "http://dummyimage.com/128x100.png/cc0000/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "business",
    imgSource:
      "https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    title: "Ursus maritimus",
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    date: "7/18/2022",
    author: {
      name: "Isahella Pheazey",
      occupation: "Payment Adjustment Coordinator",
      image: "http://dummyimage.com/217x100.png/ff4444/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "science",
    imgSource:
      "https://images.unsplash.com/photo-1507668077129-56e32842fceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2NpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    title: "Paroaria gularis",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    date: "5/15/2022",
    author: {
      name: "Melesa Porch",
      occupation: "Senior Quality Engineer",
      image: "http://dummyimage.com/200x100.png/ff4444/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "business",
    imgSource:
      "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "Lamprotornis nitens",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    date: "7/26/2022",
    author: {
      name: "Sutton Burkinshaw",
      occupation: "Research Associate",
      image: "http://dummyimage.com/145x100.png/ff4444/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "sports",
    imgSource:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    title: "Brensa dokus",
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    date: "11/27/2021",
    author: {
      name: "Francis Armand",
      occupation: "Librarian",
      image: "http://dummyimage.com/205x100.png/dddddd/000000",
    },
  },
  {
    id: "uuidv4()",
    category: "tech",
    imgSource:
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    title: "Hymenolaimus malacorhynchus",
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    date: "12/6/2021",
    author: {
      name: "Alic Extance",
      occupation: "Chemical Engineer",
      image: "http://dummyimage.com/164x100.png/cc0000/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "business",
    imgSource:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    title: "Mabuya spilogaster",
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    date: "3/19/2022",
    author: {
      name: "Alleen Penkman",
      occupation: "Structural Engineer",
      image: "http://dummyimage.com/120x100.png/dddddd/000000",
    },
  },
  {
    id: "uuidv4()",
    category: "arts",
    imgSource:
      "https://images.unsplash.com/photo-1555679486-e341a3e7b6de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    title: "Phalacrocorax niger",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    date: "2/23/2022",
    author: {
      name: "Erick Barrable",
      occupation: "Community Outreach Specialist",
      image: "http://dummyimage.com/122x100.png/ff4444/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "tech",
    imgSource:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    title: "Phalacrocorax brasilianus",
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    date: "11/15/2021",
    author: {
      name: "Elle Ambrogini",
      occupation: "Nurse Practicioner",
      image: "http://dummyimage.com/131x100.png/ff4444/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "tech",
    imgSource:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    title: "Varanus salvator",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    date: "1/1/2022",
    author: {
      name: "Issie Williamson",
      occupation: "Actuary",
      image: "http://dummyimage.com/203x100.png/ff4444/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "business",
    imgSource:
      "https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Trichoglossus haematodus moluccanus",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    date: "11/1/2021",
    author: {
      name: "Hulda Pietersen",
      occupation: "Software Test Engineer IV",
      image: "http://dummyimage.com/212x100.png/cc0000/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "arts",
    imgSource:
      "https://images.unsplash.com/photo-1600693437693-e3eb10df2677?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    title: "Lepus arcticus",
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    date: "10/28/2021",
    author: {
      name: "Kizzie Shrawley",
      occupation: "Programmer II",
      image: "http://dummyimage.com/133x100.png/cc0000/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "business",
    imgSource:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Tiliqua scincoides",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    date: "7/12/2022",
    author: {
      name: "Felicity Tinkler",
      occupation: "Executive Secretary",
      image: "http://dummyimage.com/245x100.png/5fa2dd/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "business",
    imgSource:
      "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "Rhabdomys pumilio",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    date: "4/18/2022",
    author: {
      name: "Baird McKilroe",
      occupation: "Mechanical Systems Engineer",
      image: "http://dummyimage.com/215x100.png/5fa2dd/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "business",
    imgSource:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Geochelone elegans",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    date: "7/1/2022",
    author: {
      name: "Madalyn Latliff",
      occupation: "Nurse",
      image: "http://dummyimage.com/131x100.png/ff4444/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "sports",
    imgSource:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    title: "Canis latrans",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    date: "11/10/2021",
    author: {
      name: "Padgett Munslow",
      occupation: "Statistician II",
      image: "http://dummyimage.com/239x100.png/ff4444/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "business",
    imgSource:
      "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    title: "Crotalus cerastes",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    date: "6/24/2022",
    author: {
      name: "Hussein Tofts",
      occupation: "Paralegal",
      image: "http://dummyimage.com/163x100.png/ff4444/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "business",
    imgSource:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    title: "Tadorna tadorna",
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    date: "9/25/2021",
    author: {
      name: "Bentlee Chstney",
      occupation: "Senior Editor",
      image: "http://dummyimage.com/118x100.png/cc0000/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "arts",
    imgSource:
      "https://images.unsplash.com/photo-1598022750271-b9b1d916464d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    title: "Phoca vitulina",
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    date: "4/12/2022",
    author: {
      name: "Shanon Fendt",
      occupation: "VP Sales",
      image: "http://dummyimage.com/192x100.png/ff4444/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "science",
    imgSource:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2NpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    title: "Ara macao",
    description: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    date: "11/18/2021",
    author: {
      name: "Linc Dingle",
      occupation: "Librarian",
      image: "http://dummyimage.com/150x100.png/dddddd/000000",
    },
  },
  {
    id: "uuidv4()",
    category: "tech",
    imgSource:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    title: "Spilogale gracilis",
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    date: "1/3/2022",
    author: {
      name: "Leland Spittles",
      occupation: "Web Developer III",
      image: "http://dummyimage.com/195x100.png/cc0000/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "tech",
    imgSource:
      "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    title: "Microcebus murinus",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    date: "7/16/2022",
    author: {
      name: "Bord Reith",
      occupation: "Tax Accountant",
      image: "http://dummyimage.com/245x100.png/dddddd/000000",
    },
  },
  {
    id: "uuidv4()",
    category: "business",
    imgSource:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    title: "Sarcophilus harrisii",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    date: "6/15/2022",
    author: {
      name: "Gordon Edeler",
      occupation: "Office Assistant IV",
      image: "http://dummyimage.com/243x100.png/5fa2dd/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "business",
    imgSource:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    title: "Phalaropus fulicarius",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    date: "1/10/2022",
    author: {
      name: "Rubie Fantin",
      occupation: "Analyst Programmer",
      image: "http://dummyimage.com/209x100.png/5fa2dd/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "business",
    imgSource:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    title: "Eubalaena australis",
    description: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    date: "10/29/2021",
    author: {
      name: "Gay Harte",
      occupation: "Recruiter",
      image: "http://dummyimage.com/211x100.png/5fa2dd/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "arts",
    imgSource:
      "https://images.unsplash.com/photo-1598008663930-15547ddf038f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    title: "Chlidonias leucopterus",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    date: "4/19/2022",
    author: {
      name: "Kane Fiddler",
      occupation: "Software Engineer III",
      image: "http://dummyimage.com/197x100.png/ff4444/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "science",
    imgSource:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2NpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    title: "Vulpes vulpes",
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    date: "4/30/2022",
    author: {
      name: "Haslett Condit",
      occupation: "Community Outreach Specialist",
      image: "http://dummyimage.com/122x100.png/5fa2dd/ffffff",
    },
  },
  {
    id: "uuidv4()",
    category: "politics",
    imgSource:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Hystrix indica",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    date: "5/28/2022",
    author: {
      name: "Talbert Sines",
      occupation: "Assistant Professor",
      image: "http://dummyimage.com/227x100.png/cc0000/ffffff",
    },
  },
];
