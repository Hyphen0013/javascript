const searchArr = [
  {
    id: 1,
    email: "hyphen.call@gmail.in",
    first_name: "Hyphen",
    last_name: "Call",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg",
    description:
      "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae",
    title: "dolorem eum magni eos aperiam quia"
  },
  {
    id: 2,
    email: "rocky@gmail.in",
    first_name: "Rocky",
    last_name: "Rock",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg",
    description:
      "eos qui et ipsum ipsam suscipit aut sed omnis non odio expedita earum mollitia molestiae aut atque rem suscipit nam impedit esse",
    title: "dolor sint quo a velit explicabo quia nam"
  },
  {
    id: 3,
    email: "shahil@hyphen.com",
    first_name: "Shahil",
    last_name: "Sher",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg",
    description:
      "magnam molestiae perferendis quisquam qui cum reiciendis quaerat animi amet hic inventore ea quia deleniti quidem saepe porro velit",
    title: "odio quis facere architecto reiciendis optio"
  },
  {
    id: 4,
    email: "bindybang@yahoo.com",
    first_name: "Bindi",
    last_name: "Bang",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg",
    description:
      "aut est omnis dolores neque rerum quod ea rerum velit pariatur beatae excepturi et provident voluptas corrupti corporis harum reprehenderit dolores eligendi",
    title: "qui et at rerum necessitatibus"
  },
  {
    id: 5,
    email: "riya@facebook.com",
    first_name: "Riya",
    last_name: "Edwards",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg",
    description:
      "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae",
    title: "dolorem eum magni eos aperiam quia"
  },
  {
    id: 6,
    email: "tonystark@gmail.com",
    first_name: "Tonny",
    last_name: "Stark",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg",
    description:
      "veritatis unde neque eligendi quae quod architecto quo neque vitae est illo sit tempora doloremque fugit quod et et vel beatae sequi ullam sed tenetur perspiciatis",
    title: "maxime id vitae nihil numquam"
  },
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg",
    description:
      "odio fugit voluptatum ducimus earum autem est incidunt voluptatem odit reiciendis aliquam sunt sequi nulla dolorem non facere repellendus voluptates quia ratione harum vitae ut",
    title:
      "commodi ullam sint et excepturi error explicabo praesentium voluptas"
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg",
    description:
      "id velit blanditiis eum ea voluptatem molestiae sint occaecati est eos perspiciatis incidunt a error provident eaque aut aut qui",
    title: "et fugit quas eum in in aperiam quod"
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg",
    description:
      "odio fugit voluptatum ducimus earum autem est incidunt voluptatem odit reiciendis aliquam sunt sequi nulla dolorem non facere repellendus voluptates quia ratione harum vitae ut",
    title: "et ea vero quia laudantium autem"
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg",
    description:
      "officiis error culpa consequatur modi asperiores et dolorum assumenda voluptas et vel qui aut vel rerum voluptatum quisquam perspiciatis quia rerum consequatur totam quas sequi commodi repudiandae asperiores et saepe a",
    title: "fugiat quod pariatur odit minima"
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg",
    description:
      "magnam molestiae perferendis quisquam qui cum reiciendis quaerat animi amet hic inventore ea quia deleniti quidem saepe porro velit",
    title: "odio quis facere architecto reiciendis optio"
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg",
    description:
      "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae",
    title: "dolorem dolore est ipsam"
  },
  {
    id: 13,
    email: "mayaphill@gmail.in",
    first_name: "Maya",
    last_name: "Phill",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg",
    description:
      "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae",
    title: "dolorem eum magni eos aperiam quia"
  },
  {
    id: 14,
    email: "tina@gmail.in",
    first_name: "tina",
    last_name: "too",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg",
    description:
      "eos qui et ipsum ipsam suscipit aut sed omnis non odio expedita earum mollitia molestiae aut atque rem suscipit nam impedit esse",
    title: "dolor sint quo a velit explicabo quia nam"
  },
  {
    id: 15,
    email: "lobby@hyphen.com",
    first_name: "Lobby",
    last_name: "Liya",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg",
    description:
      "magnam molestiae perferendis quisquam qui cum reiciendis quaerat animi amet hic inventore ea quia deleniti quidem saepe porro velit",
    title: "odio quis facere architecto reiciendis optio"
  },
  {
    id: 16,
    email: "vimal@yahoo.com",
    first_name: "Vimal",
    last_name: "Bang",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg",
    description:
      "aut est omnis dolores neque rerum quod ea rerum velit pariatur beatae excepturi et provident voluptas corrupti corporis harum reprehenderit dolores eligendi",
    title: "qui et at rerum necessitatibus"
  },
  {
    id: 17,
    email: "Zed@facebook.com",
    first_name: "Zed",
    last_name: "Edwards",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg",
    description:
      "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae",
    title: "dolorem eum magni eos aperiam quia"
  },
  {
    id: 18,
    email: "markzukerburg@gmail.com",
    first_name: "Mark",
    last_name: "Zukerburg",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg",
    description:
      "veritatis unde neque eligendi quae quod architecto quo neque vitae est illo sit tempora doloremque fugit quod et et vel beatae sequi ullam sed tenetur perspiciatis",
    title: "maxime id vitae nihil numquam"
  }
];

module.exports = searchArr;
