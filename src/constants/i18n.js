import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import locale2 from "locale2";

i18n
  //  .use(XHR)
  // and check https://github.com/i18next/i18next-browser-languageDetector for client side !!!
  // and this https://github.com/i18next/i18next-browser-languageDetector/issues/150
  .use(initReactI18next) // if not using I18nextProvider
  .init({
    // lng: locale2.substr(0,2),
    lng: "en",
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      wait: true,
      bindI18n: "languageChanged loaded",
      bindStore: "added removed",
      nsMode: "default",
    },

    resources: {
      en: {
        translation: {
          ChVerseDelimiter: ":",
          Chapter: "Chapter",
          newPassage: "New Passage",
          BeginCh: "Begin Chapter",
          BeginV: "Begin Verse",
          EndCh: "End Chapter",
          EndV: "End Verse",
          Verse: "Verse",
          John: "John",
          JohnLongTitle: "The Gospel of John",
          "videoURL.YT": "https://www.youtube.com/watch?v=xEK-0n88zSI",
          "John.ImgId": "img/john-pics/VB-John1v14.jpg",
          "John.Descr":
            "John’s Gospel begins with a poetic introduction that places the story of Jesus within the wider story of the Word of God. A word is a form of communication, and the story stresses ways in which God speaks to the world through Jesus. \nThis Gospel helps us into the relationship of trust in God, like we were created for and which is true life. \nJesus communicates the will of God by the words he speaks, by the miracles he performs, by the death he dies in love for others, and by rising to life. The miracles recorded in John’s gospel are written that the reader would believe in Jesus and find life in His name. \nJesus appears in the role of a human being, which means that he is an example for other people to follow. As a typical human being, he possessed no extraordinary power that is not available to anyone else who asks for it and who meets the conditions for receiving it.",
          "John.1": "The Living Word of God",
          "John.1.ImgId": "img/john-pics/VB-John1v14.jpg",
          "John.2": "Cana Wedding",
          "John.2.ImgId": "img/john-pics/VB-John2v3.jpg",
          "John.3": "Nicodemus",
          "John.3.ImgId": "img/john-pics/VB-John3v2.jpg",
          "John.4": "Samaritan Woman",
          "John.4.ImgId": "img/john-pics/VB-John4v37.jpg",
          "John.5": "Lame Man Healed",
          "John.5.ImgId": "img/john-pics/VB-John5v2.jpg",
          "John.6": "Bread of Life",
          "John.6.ImgId": "img/john-pics/VB-John6v36.jpg",
          "John.7": "Rivers of Living Water",
          "John.7.ImgId": "img/john-pics/VB-John7v28.jpg",
          "John.8": "Abraham's Descendants",
          "John.8.ImgId": "img/john-pics/VB-John8v2b.jpg",
          "John.9": "Blind Man Healed",
          "John.9.ImgId": "img/john-pics/VB-John9v11b.jpg",
          "John.10": "Sheepfold-Shepherd",
          "John.10.ImgId": "img/john-pics/VB-John10v2.jpg",
          "John.11": "Lazarus",
          "John.11.ImgId": "img/john-pics/VB-John11v38b-39a.jpg",
          "John.12": "Entrance Into Jerusalem",
          "John.12.ImgId": "img/john-pics/VB-John12v2b.jpg",
          "John.13": "Foot Washing",
          "John.13.ImgId": "img/john-pics/VB-John13v18.jpg",
          "John.14": "Way-Truth-Life",
          "John.14.ImgId": "img/john-pics/VB-John14v20.jpg",
          "John.15": "Vine-Branches",
          "John.15.ImgId": "img/john-pics/VB-John15v15a.jpg",
          "John.16": "Hope that Overcomes the World",
          "John.16.ImgId": "img/john-pics/VB-John16v25.jpg",
          "John.17": "Christ to Depart",
          "John.17.ImgId": "img/john-pics/VB-John17v14.jpg",
          "John.18": "Arrest and Trials",
          "John.18.ImgId": "img/john-pics/VB-John18v24.jpg",
          "John.19": "Death for Sins",
          "John.19.ImgId": "img/john-pics/VB-John19v10.jpg",
          "John.20": "Resurrection",
          "John.20.ImgId": "img/john-pics/VB-John20v17b.jpg",
          "John.21": "Sea of Tiberius",
          "John.21.ImgId": "img/john-pics/VB-John21v15b.jpg",
          "John.1.Descr":
            "The Word of God became flesh and dwelt with us. John the Baptist bore witness to him. Andrew told Simon Peter and they followed Jesus.",
          "John.2.Descr":
            'Jesus turned water into wine at a wedding. He drove money-changers from the temple. He said, "Destroy this temple and I will raise it."',
          "John.3.Descr":
            'Jesus told Nicodemus, "Be born again. Whoever believes in the Son will have eternal life." John the Baptist said, "He is above all."',
          "John.4.Descr": `Jesus spoke with a Samaritan woman about her husbands. She said, "Can this be the Christ?" Many believed. He healed an official's son.`,
          "John.5.Descr":
            'Jesus healed a man at Bethesda. He said, "The Son only does what he sees the Father doing. My works and the Scriptures bear witness."',
          "John.6.Descr":
            'Jesus fed 5,000 men and walked across the sea. He said, "I am the bread of life. My flesh is true food." Many disciples turned back.',
          "John.7.Descr":
            'Jesus went to the feast. The people said, "Is this the Christ?" The chief priests tried to arrest him. He called out, "Come and drink."',
          "John.8.Descr":
            'Jesus did not condemn a woman caught in adultery. The Pharisees questioned him. He said, "If God were your Father you would love me."',
          "John.9.Descr":
            'Jesus healed a blind man on the Sabbath. The Pharisees called the man and threw him out. Jesus said, "I came that the blind may see."',
          "John.10.Descr":
            'Jesus said, "I am the good shepherd. I give my life for the sheep." They asked, "Are you the Christ?" He said, "My sheep follow me."',
          "John.11.Descr":
            'Lazarus died. Jesus went to the tomb and said, "Lazarus, come out." Lazarus came out. The chief priests plotted to put Jesus to death.',
          "John.12.Descr":
            'Jesus rode into Jerusalem. The crowd shouted, "Hosanna!" He said, "The Son of Man must be lifted up. I have come to save the world."',
          "John.13.Descr": `Jesus washed the disciples' feet. He said, "One of you will betray me." Judas left. Jesus said, "Love each other as I have loved you."`,
          "John.14.Descr":
            '"I am the way, the truth, and the life. I am in the Father and the Father in me. He will give you the Holy Spirit. Do not be afraid."',
          "John.15.Descr":
            '"I am the vine, you are the branches. You are my friends if you do what I command. If they persecuted me, they will persecute you."',
          "John.16.Descr":
            '"The Spirit will convict the world of sin. He will guide you into all truth. Your sorrow will turn to joy. I am going to the Father."',
          "John.17.Descr":
            'Jesus said, "Father, I have revealed your name to those you gave me. Sanctify them in the truth. May all who believe in me be one."',
          "John.18.Descr":
            'Judas betrayed Jesus to the chief priests. Peter denied him. He was sent before Pilate. Jesus said, "My kingdom is not of this world."',
          "John.19.Descr":
            'The soldiers took Jesus and crucified him. He said, "It is finished." He gave up his spirit. A soldier pierced his side with a spear.',
          "John.20.Descr":
            'Mary went to the tomb and found it empty. Jesus met her. He came and stood among the disciples. Thomas said, "My Lord and my God!"',
          "John.21.Descr":
            'Jesus appeared as the disciples were fishing. He said to Peter, "Do you love me? Feed my sheep." The beloved disciple has testified.',
          "John.1.1": "The Word became flesh",
          "John.1.19": "John the Baptist denies being the Messiah",
          "John.1.29": "John testifies about Jesus",
          "John.1.35": "John’s disciples follow Jesus",
          "John.1.43": "Jesus calls Philip and Nathanael",
          "John.2.1": "Jesus changes water into wine",
          "John.2.13": "Jesus clears the temple courts",
          "John.2.23": "Jesus understands the people",
          "John.3.1": "Jesus teaches Nicodemus",
          "John.3.22": "John testifies again about Jesus",
          "John.4.1": "Jesus talks with a Samaritan woman",
          "John.4.27": "The disciples rejoin Jesus",
          "John.4.39": "Many Samaritans believe",
          "John.4.43": "Jesus heals an official’s son",
          "John.5.1": "The healing at the pool",
          "John.5.16": "The authority of the Son",
          "John.5.19": "Jesus' authority: the authority of the Son",
          "John.5.31": "Testimonies about Jesus",
          "John.6.1": "Jesus feeds the five thousand",
          "John.6.16": "Jesus walks on the water",
          "John.6.22": "The crowd seeks Jesus",
          "John.6.25": "Jesus the bread of life",
          "John.6.26": "Jesus Christ - the bread of life",
          "John.6.35": "Whoever believes has eternal life",
          "John.6.48": "Whoever eats this bread will live forever",
          "John.6.60": "Many disciples desert Jesus",
          "John.6.67": "Peter's confession",
          "John.7.1": "Jesus goes to the Festival of Tabernacles",
          "John.7.10": "Jesus at the Feast of Tabernacles in Jerusalem",  
          "John.7.14": "Jesus teaches at the festival",
          "John.7.25": "Division over who Jesus is",
          "John.7.45": "Unbelief of the Jewish leaders",
          "John.8.12": "Dispute over Jesus’ testimony",
          "John.8.21": "Dispute over who Jesus is",
          "John.8.31": "Dispute over whose children Jesus’ opponents are",
          "John.8.48": "Jesus’ claims about himself",
          "John.9.1": "Jesus heals a man born blind",
          "John.9.13": "The Pharisees investigate the healing",
          "John.9.35": "Spiritual blindness",
          "John.10.1": "The good shepherd and his sheep",
          "John.10.22": "Further conflict over Jesus’ claims",
          "John.11.1": "The death of Lazarus",
          "John.11.17": "Jesus comforts the sisters of Lazarus",
          "John.11.38": "Jesus raises Lazarus from the dead",
          "John.11.45": "The plot to kill Jesus",
          "John.12.1": "Jesus anointed at Bethany",
          "John.12.12": "Jesus comes to Jerusalem as king",
          "John.12.20": "Jesus predicts his death",
          "John.12.37": "Belief and unbelief among the Jews",
          "John.13.1": "Jesus washes his disciples’ feet",
          "John.13.18": "Jesus predicts his betrayal",
          "John.13.31": "Jesus predicts Peter’s denial",
          "John.14.1": "Jesus comforts his disciples",
          "John.14.5": "Jesus the way to the Father",
          "John.14.15": "Jesus promises the Holy Spirit",
          "John.15.1": "The vine and the branches",
          "John.15.18": "The world hates the disciples",
          "John.15.26": "The work of the Holy Spirit",
          "John.16.16": "The disciples’ grief will turn to joy",
          "John.17.1": "Jesus prays to be glorified",
          "John.17.6": "Jesus prays for his disciples",
          "John.17.20": "Jesus prays for all believers",
          "John.18.1": "Jesus arrested",
          "John.18.15": "Peter’s first denial",
          "John.18.19": "The high priest questions Jesus",
          "John.18.25": "Peter’s second and third denials",
          "John.18.28": "Jesus before Pilate",
          "John.19.1": "Jesus sentenced to be crucified",
          "John.19.16": "The crucifixion of Jesus",
          "John.19.28": "The death of Jesus",
          "John.19.38": "The burial of Jesus",
          "John.20.1": "The empty tomb",
          "John.20.11": "Jesus appears to Mary Magdalene",
          "John.20.19": "Jesus appears to his disciples",
          "John.20.24": "Jesus appears to Thomas",
          "John.20.30": "The purpose of John’s gospel",
          "John.21.1": "Jesus and the miraculous catch of fish",
          "John.21.15": "Jesus reinstates Peter",
"John.1.1.descr": `John shows Jesus in these first verses as the one who is fully human and fully God (see also Col 2:9).
Although he - the Word - became flesh and lived among us (1:14) and became fully human, he never ceased to be the eternal God and source of life. John wrote this Gospel with the intention of encouraging faith in this Jesus and trust in him.
In which questions and areas of life do you want to be strengthened in your faith in Jesus in the next three months?`,
"John.1.19.descr": `John the Baptist describes himself as a voice calling in the desert: "Prepare the way for the coming of the Lord" (1:23).
Which paths in your life may still need to be paved so that Jesus has free access?
And where can you be the one to pave a way for Jesus for people around you?`,
"John.1.29.descr": `John the Baptist describes Jesus as the Lamb of God who takes away the sin of the world (1:29).
How has Jesus taken away the sins in your life and how does this fact affect you in your daily life?`,
"John.1.35.descr": `Andrew brings his brother Simon to Jesus to show him the Savior. And in the next verses, Philip will tell Nathanael about Jesus and ask him to see Jesus for himself (1:46).
Is there someone in your life that you can bring to Jesus?
Who you can invite to come along and see for themselves?`,
"John.1.43.descr": `Whatever happened there under the fig tree, Nathanael knows that Jesus "saw" him.
Have you experienced Jesus seeing and knowing you in a similar way?
What impact did this have on your faith?`,
"John.2.1.descr": `The first miracle of Jesus: Water is turned into wine at the wedding in Cana.
How do you experience Jesus' transforming power in your own life?
Where do you want such a transformation?`,
"John.2.13.descr": `Jesus cleanses the temple and drives out the merchants (2:15).
What needs to be cleansed in your life so that it can be a "house of prayer" and our body a "temple of the Holy Spirit" (1 Cor. 6:19)?
How can you make sure that you give Jesus the place he deserves in your life?`,
"John.3.1.descr": `The phrase "being born of water" is usually understood as a reference to a personal conversion to God (repentance) and the Christian baptism.
What did Jesus mean by the phrase that we must be "born of the Spirit"?
Have you experienced this personally?`,
"John.3.22.descr": `«He must increase, but I must decrease» (3:30):
Can you also say this about your life - and what does it mean in practical terms that Jesus should have more and more influence in your life?`,
"John.4.1.descr": `Do you experience how Jesus quenches your thirst again and again and you have enough to give others the «water of life» to drink?`,
"John.4.27.descr": `The woman from Samaria leaves her water jar and tells everyone about her encounter with Jesus (4:28).
When was the last time you left everything behind to tell others what you experienced with HIM?`,
"John.4.43.descr": `Jesus says somewhat reproachfully that we humans can often only believe when we experience miracles and signs (4:48).
Does your faith depend on miracles?`,
"John.5.1.descr": `Among all the sick, blind and lame, Jesus heals only one long-term sick person that day (5:3-5).
How do you explain Jesus' way of dealing with this?
Is Jesus not interested in helping all the other sick people?`,
"John.5.19.descr": `Jesus sees himself as being completely dependent on his heavenly Father: He can only do what he sees his Father doing (5:19).
If Jesus submitted himself so completely to the will of God, what significance does this have for our everyday lives and our prayers?`,
"John.5.31.descr": `Jesus provokes with the statement that eternal life is not to be found in the Scriptures, but in him (5:39-40).
Where are you looking for "eternal life"?`,
"John.6.1.descr": `Jesus does not want to be crowned king by people (6:15).
Why does Jesus withdraw from people even though he is the "King of Kings"?`,
"John.6.16.descr": `Storms seem to be a part of life.
In what storm situations do you need Jesus' encouragement: "Don't be afraid, it's me!"?`,
"John.6.22.descr": `Sometimes Jesus suddenly seems to be gone.
Are you someone who can leave the familiar places and look for Jesus on the other side (6:25)?`,
"John.6.26.descr": `Why are you looking for Jesus; because you want to satisfy your hunger or because you are interested in Jesus himself (6:27)?`,
"John.6.35.descr": `We humans look for life in the most diverse and often most impossible places:
Is it enough for you to have the bread of life in Jesus (6:41)?`,
"John.6.48.descr": `Jesus provokes the Jews of that time by asking them to eat his flesh and drink his blood.
Could there be more here than just a reference to the Lord's Supper? In this case, what?`,
"John.6.60.descr": `What prevents people today from following Jesus?
Compare verse 66. "It is the Spirit who gives life." This verse is like petrol in the tank of a Christian's life.
What helps you to continually fill your spiritual life with God's words?`,
"John.6.67.descr": `What would you answer Jesus if he asked you this question?
Compare verse 67.
Make a note of everything that has been given to you in/with Jesus!`,
"John.7.1.descr": `For what reasons do people still hate Jesus today?
Compare verse 7. The brothers obviously want Jesus to be celebrated and recognised for who He is.
Where are we as Christians and the church in a similar temptation?`,
"John.7.10.descr": `Jesus remains independent of people and always waits for the Father's instructions. In doing so, he chooses the way of the cross, for our benefit.
What does this fact trigger in you?
Practical obedience, as described in verse 17, allows the divine inspiration of the Word of God to be experienced as a reality in our lives.
What experiences have you had with this?`,
"John.7.25.descr": `The dispute over the "real" Messiah is coming to a head: The opponents cannot cope with Jesus and his provocative and yet mysterious words.
Will Israel still accept Jesus?
Will we use the time we have left to live properly?`,
"John.7.37.descr": `What parallels are contained in verses 17 and 38?
Why is this emphasis on Jesus so important? Whoever drinks from this source, i.e. trusts or obeys Jesus, becomes a source for others.
Have you received the Holy Spirit?
If not, what can you do today to receive him?`,
"John.7.40.descr": `The fierce dispute over Jesus flares up again. Even the arrest squad confirms the uniqueness of Jesus.
Do you sometimes lose the courage to stand by Jesus?
Nicodemus can help us; he defends Jesus bravely and wisely.`,
"John.8.1.descr": `“I do not condemn you either; you may go. Sin no more from now on!” Jesus said to the woman. 
How do you deal with people who are caught up in sin?`,
"John.8.12.descr": `Jesus explains that He is the light of the world and that those who follow Him will not walk in darkness.
In what areas of your life do you need Jesus' light to find clarity and guidance?`,
"John.8.21.descr": `Jesus talks about His impending death and return to the Father, and many don't understand Him.
How do you deal with things you don't fully understand in your faith?`,
"John.8.31.descr": `Jesus says that the truth will set us free if we abide in His Word.
What truths from God's Word have already set you free in your life?`,
"John.8.37.descr": `Jesus explains that those who are of God hear the words of God.
How do you listen to God's voice in your life?`,
"John.8.48.descr": `People accuse Jesus of being possessed by a demon, but he replies that he honors God.
How do you deal with accusations or misunderstandings about your faith?`,
"John.9.1.descr": `Jesus heals a man who was blind from birth, thereby revealing the works of God.
In what areas of your life have you experienced God's work and healing?`,
"John.9.13.descr": `Back then, miracles were not allowed to happen on the Sabbath. Today, miracles contradict our human reason.
How do you feel about God's miraculous actions here and now?`,
"John.9.24.descr": `Our personal story of how Jesus changed our lives is powerful:
Can you tell the story, like the blind man who was healed, about what Jesus did in your life?`,
"John.9.35.descr": `Actually, only the blind man "saw"; those who seemed to be able to see were the ones who were blind.
Which group do you belong to?`,
"John.10.1.descr": `Jesus says that the sheep know the voice of their shepherd.
What does Jesus' voice sound like and how do you recognize your shepherd?`,
"John.10.7.descr": `Jesus came to bring life - life in abundance.
Where have you experienced him leading you to the fullest life?`,
"John.10.11.descr": `Jesus's mission was to give his life as a sacrifice.
What is your mission that the heavenly Father has given you?`,
"John.10.22.descr": `Jesus says that his actions speak for themselves and prove him to be the son of his heavenly Father.
What do your actions say about you?`,
"John.10.31.descr": `People recognize that "everything he (John the Baptist) said about this man" has proven to be true. Jesus has proven to be true, which is why many believed in him.
Why do you believe in Jesus?`,
"John.11.1.descr": `Jesus' statements are not always clear and easy to understand. But when the disciples ask him, he gives them a clear answer.
What do you want to ask Jesus that you don't yet understand?`,
"John.11.17.descr": `Jesus says: "I am the resurrection and the life."
In whom or in what are you looking for a successful future and a fulfilled life?`,
"John.11.28.descr": `"Jesus' eyes filled with tears." Jesus felt human emotions such as anger, pain and compassion.
What unjust circumstances fill your eyes with tears? Who do you feel compassion for?`,
"John.11.38.descr": `"... (insert your name), come out!" Jesus is calling you back to life too.
In which dead area of ​​your life do you hear Jesus calling you?
Take a step towards him, the true life, and come alive.`,
"John.11.45.descr": `"One for all and all for one". With his sacrifical death, Jesus won freedom for all of us. One died for all.
Are you ready to live completely for Jesus now?`,
"John.12.1.descr": `"There will always be poor people you can look after."
Who do you look after who is poor?
Who can you specifically help in their need today or in the coming week?`,
"John.12.12.descr": `The word "Hosanna" expresses people's longing for salvation. But Jesus is not looking for "followers" (cf. a few days later: John 19:15) but rather "disciples".
What is the difference?`,
"John.12.20.descr": `By "dying" it actually means putting my own will aside so that good fruits can come from it.
What could this mean specifically in your own life?
What is the lasting consequence of this?`,
"John.12.27.descr": `The "reach high" is a dream goal for many. For Jesus, His goal led "upwards" all the way to the cross. 
«Walk while you have the light, lest darkness overtake you“. What could this mean for you?
How can you best use the time you have been given?`,
"John.12.37.descr": `So many people around us reject Jesus, that hurts us - but Jesus himself experienced this rejection! The love of God shines all the more brightly, and does not lose any of its radiance as a result. That should encourage us too!
How do you deal with rejection?
Is it time to be a little braver?`,
"John.12.42.descr": `Jesus summarizes his calling again: Everything HE says and does comes from the Father. This makes our responsibility of how we deal with what His words tell us all the greater.
What does the text say about the positive and negative consequences of this our responsibility?`,
"John.13.1.descr": `Apparently none of the disciples were ready for this "humbling" act of love at the beginning of the celebration. Jesus shows that this foot washing also has a symbolic character. It is an image of our necessary and holistic cleansing through Jesus' crucifixion. (Read chapter 5 of the letter to the Ephesians) You can also read what a daily "foot washing" can look like and what it involves in 1 John 1:7.
Whose feet can you "wash" today?
And who can you ask to "wash" your feet?`,
"John.13.12.descr": `The symbolic meaning of foot washing: We can emulate Jesus' example among ourselves (in the church). Because Jesus extends the Father's mission to his followers in verse 20.
How does this influence your behavior?`,
"John.13.21.descr": `The story of Judas' betrayal is well known. Judas is one of the 12 disciples - he is called by Jesus and stays with him day and night for three years. Nevertheless, he betrays Jesus.
Has this ever happened to you?
How do you deal with such a betrayal?`,
"John.13.31.descr": `Jesus gives us a new commandment that we should love one another. Just as he showed us in his dealings with his disciples.
Are we as a community recognized from the outside by how we love one another?
Are you personally recognized as a Christian by your love for your neighbors?`,
"John.13.36.descr": `Here you will find the second announcement of the betrayal of Jesus. Peter says with full conviction: "I will lay down my life for you!"
Does this misjudgment sound familiar to you in your life?
Have you ever experienced a situation like this?`,
"John.14.1.descr": `We humans think very differently, are shaped personally and perceive things differently.
Could this be the reason why there are different homes available for us in heaven?
Or will we probably live there as extended families? What do you think about heaven?`,
"John.14.8.descr": `Jesus promises something wonderful here: whoever believes in Him can do the same works as Jesus - even greater things!
Do you see this statement connected to the miracles or to His nature, His attitude and His manners?`,
"John.14.15.descr": `Here Jesus expresses a very challenging connection between love for Him and obedience: If we love him, we keep his commandments!
How are you doing with keeping his commandments in your everyday life?
Do you doubt your love for him or his love for you?`,
"John.14.25.descr": `At the end of the Last Supper with the many different topics that Jesus discussed with the disciples, he says quite abruptly:
Stand up and let us go from here.
What does that mean in the context of the Last Supper back then and what does it mean for you today?`,
"John.15.1.descr": `Jesus says that He is the true vine and we are the branches (15:1-2). If we remain in Him, we will bear much fruit.
When was the last time you consciously experienced that you remained in Jesus and that fruit came from it?
What does it mean for you to be "circumcised" by Jesus so that you can bear more fruit (15:2)?`,
"John.15.9.descr": `Jesus calls us to remain in his love and keep his commandments in order to experience joy (15:9-11).
How do you experience the joy that comes from obeying his commandments?
What does it mean for you in practical terms to love one another as Jesus loved us (15:12)?`,
"John.15.18.descr": `Jesus warns his disciples that the world will hate them because they are not of the world, just as He is not of the world (15:18-19).
Have you ever experienced hostility or rejection because you believe in Jesus? 16:1-4 How do you deal with this, and how does knowing that Jesus has already predicted this help you?`,
"John.16.5.descr": `Jesus promises his disciples the Holy Spirit, who will lead them into all truth (16:13).
In which situations have you felt the guidance of the Holy Spirit particularly clearly in your life?
How can you rely more on the Holy Spirit and learn from him in everyday life?`,
"John.16.16.descr": `Jesus speaks about his impending departure and the reunion, which will bring great joy to the disciples (16:22).
How do you deal with times of grief and loss, and where do you find comfort in the promise that Jesus will see us again?
What does it mean for you to ask in Jesus' name and experience the fullness of joy (16:24)?`,
"John.16.25.descr": `Jesus promises his disciples peace, even when they will experience distress in the world (16:33).
Where in your life have you experienced the peace of Jesus despite difficult circumstances?
How does the confidence that Jesus has overcome the world strengthen you in dealing with challenges and crises?`,
"John.17.1.descr": `Jesus prays to his Father and asks for the glorification that is due to him (17:1). He reflects on eternal life and his completion of the work on earth (17:4).
How can you glorify God in your life and complete the work he has given you?
What does eternal life mean to you, which Jesus describes as the recognition of the only true God and Jesus Christ (17:3)?`,
"John.17.6.descr": `Jesus prays for unity among believers.
Is the unity of Christians also important to you and how can you contribute something concrete to this unity today?`,
"John.17.20.descr": `People should recognize from the unity of believers that Jesus is the one sent by God (17:21.23).
What does it mean to you if the powerlessness of the Christian testimony is related to the lack of unity and love among Christians?`,
"John.18.1.descr": `Jesus takes the cup of suffering from his father's hand.
Which suffering should you also accept from God's hand, and which suffering can you avoid?`,
"John.18.12.descr": `How would you describe Jesus' behavior in conversation with the high priest Annas, and what could this mean for you in challenging situations?`,
"John.18.15.descr": `Do you know moments in your personal life when you sit by the warming fire and deny Jesus?`,
"John.18.28.descr": `Jesus was born and came into the world to bear witness to the truth. What does Jesus mean here by «truth»?`,
"John.18.38.descr": `Jesus is handed over to death, and the robber Barabbas is released:
How do you explain this «crying injustice» at that time?`,
"John.19.1.descr": `Pilate hopes to satisfy the angry people by having Jesus whipped and mocked. He is guided by the fear of people.
Do you also know this fear of people, their reactions and statements?
The Bible says that wisdom begins with the fear of God. How can you obey God more than people and their expectations in the future?
A comment:
The soldiers wove a crown of thorns: Kings wear crowns, but not crowns of torture. This crown cut, pierced and bloodied the head of the king who wore it. Jesus endured this torment and pain for you.
Then they put a purple robe on him: Kings and rulers often wore purple because the dyes to produce this color were expensive. The purple robe was intended as a cruel irony. And so Jesus also bore all the mockery and scorn in your place. Do you accept his offer to find salvation in his wounds? Compare 1 Peter 2:24.`,
"John.19.6.descr": `Jesus chooses his words carefully and speaks only a few words. These words are all the more impressive when we analyze Pilate's reactions closely.
How do you handle your words? Do you make a lot of words about nothing or do you choose appropriate and true words?
Are you able to speak up when it comes to your identity in Christ?`,
"John.19.17.descr": `"Jesus of Nazareth, the King of the Jews". The identity of Jesus and his role in human history was controversial from the beginning. The Jews did not want him as king and rejected his origins. Nevertheless, Jesus remains who he is.
Is Jesus also your king?
How do you behave towards your King - and do you need to change your attitude and approach towards him?`,
"John.19.28.descr": `"It is finished!" He has done it for you. Salvation is due to God's actions alone.
Do you believe that?
Do you want to accept the gift of grace and forgiveness again or anew today?`,
"John.19.31.descr": `Jesus Christ is "the one they pierced". He was pierced in our place. He took your place and died for you.
How can you thank God for that today?
How do you live a life of thankfulness and in new, gifted freedom from guilt?`,
"John.19.38.descr": `Jesus was buried in a new grave. He was confirmed dead and his body was lifeless.
Do you have things in your life that smell of death, destruction or suffering?
Did you have to bury loved ones, dreams or hopes?
Bring your grief to Jesus in prayer and mourn with him over your loss.`,
"John.20.1.descr": `"Jesus is risen!" - When the disciple, the one whom Jesus loved, went into the grave and saw everything, he believed. What do you have to see in order to be able to believe?
What gives your faith security?
The first Christians and apostles were so full of faith and conviction that they were all prepared to die for this truth.`,
"John.20.10.descr": `Mary Magdalene meets the risen Jesus and does not recognize him at first (20:14). She could not see him because she did not expect to see him. Then he called her by name and she immediately recognized him (20:16).
How would you react if Jesus met you personally? Do you hear him calling you unmistakably by your name?`,
"John.20.19.descr": `Jesus appears to the disciples in their disappointment and fear and says: "Peace be with you!" (20:19).
How do you experience the peace of Jesus in your life?
Where do you wish that Jesus would come and bring peace and joy?`,
"John.20.24.descr": `Thomas doubts the resurrection and wants to see Jesus in order to believe (20:25). Jesus does not criticize this honest doubt.
Jesus meets Thomas in the way he needs. Do you also have doubts?
Then don't stop at this point, but go in search of answers. Jesus will meet you and your doubts can lead to a deepening of your faith.`,
"John.20.30.descr": `John summarizes his intention again:
He wrote down the work of Jesus so that we can believe and have life through faith (20:31).
How has reading the Gospel of John in the last few weeks strengthened your faith?
Tell someone about your experience and your experiences.`,
"John.21.1.descr": `What a beautiful scene:
After all the hustle and bustle of the last few days, Jesus prepares breakfast for his disciples and invites them to sit down and eat with him.
Where does Jesus invite you today to simply "sit down" with him, to have fellowship with him and be cared for?`,
"John.21.15.descr": `After Jesus had physically strengthened the disciples with breakfast and created a safe space, he strengthened Peter personally after his denial (John 18). Jesus asks Peter three times whether he loves him and gives him the task of tending his sheep (21:17).
How do you answer Jesus' question: "Do you love me?"
What tasks have you taken on through your love for Jesus?`,
"John.21.20.descr": `Peter asks about the fate of the disciple whom Jesus loved (21:21). We too are in danger of comparing ourselves with others in our life of faith.
What does Jesus' call, "Follow me" (21:22) mean for you?`
        },
      },
      de: {
        translation: {
          ChVerseDelimiter: ":",
          Chapter: "Kapitel",
          newPassage: "New Passage",
          BeginCh: "Begin Chapter",
          BeginV: "Begin Verse",
          EndCh: "End Chapter",
          EndV: "End Verse",
          Verse: "Vers",
          John: "Johannes",
          JohnLongTitle: "Das Johannesevangelium",
          "videoURL.YT": "https://www.youtube.com/watch?v=MpGiPo8UuVk",
          "John.ImgId": "DasJohannesevangelium.jpg",
          "John.Descr":
            "John’s Gospel begins with a poetic introduction that places the story of Jesus within the wider story of the Word of God. A word is a form of communication, and the story stresses ways in which God speaks to the world through Jesus. \nThis Gospel helps us into the relationship of trust in God, like we were created for and which is true life. \nJesus communicates the will of God by the words he speaks, by the miracles he performs, by the death he dies in love for others, and by rising to life. The miracles recorded in John’s gospel are written that the reader would believe in Jesus and find life in His name. \nJesus appears in the role of a human being, which means that he is an example for other people to follow. As a typical human being, he possessed no extraordinary power that is not available to anyone else who asks for it and who meets the conditions for receiving it.",
          "John.1": "Das Mensch gewordene Wort Gottes",
          "John.1.ImgId": "img/john-pics/VB-John1v14.jpg",
          "John.2": "Hochzeit in Kana",
          "John.2.ImgId": "img/john-pics/VB-John2v3.jpg",
          "John.3": "Nikodemus",
          "John.3.ImgId": "img/john-pics/VB-John3v2.jpg",
          "John.4": "Die samaritanische Frau",
          "John.4.ImgId": "img/john-pics/VB-John4v37.jpg",
          "John.5": "Heilung eines Kranken",
          "John.5.ImgId": "img/john-pics/VB-John5v2.jpg",
          "John.6": "Brot des Lebens",
          "John.6.ImgId": "img/john-pics/VB-John6v36.jpg",
          "John.7": "Wasser des Lebens",
          "John.7.ImgId": "img/john-pics/VB-John7v28.jpg",
          "John.8": "Kinder Abrahams",
          "John.8.ImgId": "img/john-pics/VB-John8v2b.jpg",
          "John.9": "Heilung eines Blindgeborenen",
          "John.9.ImgId": "img/john-pics/VB-John9v11b.jpg",
          "John.10": "Der gute Hirte",
          "John.10.ImgId": "img/john-pics/VB-John10v2.jpg",
          "John.11": "Lazarus",
          "John.11.ImgId": "img/john-pics/VB-John11v38b-39a.jpg",
          "John.12": "Einzug in Jerusalem",
          "John.12.ImgId": "img/john-pics/VB-John12v2b.jpg",
          "John.13": "Fußwaschung",
          "John.13.ImgId": "img/john-pics/VB-John13v18.jpg",
          "John.14": "Der Weg, die Wahrheit und das Leben",
          "John.14.ImgId": "img/john-pics/VB-John14v20.jpg",
          "John.15": "Der Weinstock",
          "John.15.ImgId": "img/john-pics/VB-John15v15a.jpg",
          "John.16": "Das Kommen des Heiligen Geistes",
          "John.16.ImgId": "img/john-pics/VB-John16v25.jpg",
          "John.17": "Das Gebet Jesu für seine Jünger",
          "John.17.ImgId": "img/john-pics/VB-John17v14.jpg",
          "John.18": "Gefangennahme und Verurteilung",
          "John.18.ImgId": "img/john-pics/VB-John18v24.jpg",
          "John.19": "Tod",
          "John.19.ImgId": "img/john-pics/VB-John19v10.jpg",
          "John.20": "Die Auferstehung",
          "John.20.ImgId": "img/john-pics/VB-John20v17b.jpg",
          "John.21": "Am See von Tiberias",
          "John.21.ImgId": "img/john-pics/VB-John21v15b.jpg",
          "John.1.Descr":
            "Das Wort Gottes wurde Fleisch und wohnte unter uns. Johannes der Täufer legt Zeugnis für ihn ab. Andreas erzählt es Simon Petrus und sie folgten Jesus.",
          "John.2.Descr":
            'Jesus verwandelt bei einer Hochzeit Wasser in Wein. Er treibt Geldwechsler aus dem Tempel und sagt: "Zerstört diesen Tempel und ich werde ihn wieder aufbauen."',
          "John.3.Descr":
            'Jesus sagt zu Nikodemus: "Du musst wiedergeboren werden. Wer an den Sohn glaubt, wird ewiges Leben haben." Johannes der Täufer sagt: "Er ist über allem."',
          "John.4.Descr": `Jesus spricht mit einer Samariterin über ihren Mann. Sie sagt: "Kann das der Christus sein?" Viele glauben. Er heilt den Sohn eines Beamten.`,
          "John.5.Descr":
            "Jesus heilt einen Mann in Bethesda. Er sagt: „Der Sohn tut nur, was er sieht, dass der Vater tut. Meine Werke und die Schriften legen Zeugnis davon ab.“",
          "John.6.Descr":
            "Jesus speist 5.000 Männer und geht über das Meer. Er sagt: „Ich bin das Brot des Lebens. Mein Fleisch ist wahre Speise.“ Viele Jünger ziehen sich zurück.",
          "John.7.Descr":
            "Jesus geht zum Laubhüttenfest. Die Leute sagen: „Ist dies der Christus?“ Die Hohepriester versuchen, ihn festzunehmen. Er ruft: „Kommt und trinkt.“",
          "John.8.Descr":
            "Jesus verurteilt eine Frau nicht, die beim Ehebruch ertappt wurde. Die Pharisäer befragen ihn. Er sagt: „Wenn Gott euer Vater wäre, würdet ihr mich lieben.“",
          "John.9.Descr":
            "Jesus heilt am Sabbat einen Blinden. Die Pharisäer werfen diesen blinden Mann hinaus. Jesus sagt: „Ich bin gekommen, damit die Blinden sehen können.“",
          "John.10.Descr":
            "Jesus sagt: „Ich bin der gute Hirte. Ich gebe mein Leben für die Schafe.“ Sie fragen: „Bist du der Christus?“ Er sagt: „Meine Schafe folgen mir.“",
          "John.11.Descr":
            "Lazarus stirbt. Jesus geht zum Grab und ruft: „Lazarus, komm heraus.“ Lazarus kommt heraus. Die Hohepriester planen, Jesus zu töten.",
          "John.12.Descr":
            "Jesus reitet nach Jerusalem. Die Menge ruft: „Hosianna!“ Er sagt: „Der Menschensohn muss erhöht werden. Ich bin gekommen, um die Welt zu retten.“",
          "John.13.Descr": `Jesus wischt den Jüngern die Füße. Er sagt: „Einer von euch wird mich verraten.“ Judas geht weg. Jesus sagt: „Liebt einander, wie ich euch geliebt habe.“`,
          "John.14.Descr":
            "„Ich bin der Weg, die Wahrheit und das Leben. Ich bin im Vater und der Vater in mir. Er wird euch den Heiligen Geist senden. Habt keine Angst.“",
          "John.15.Descr":
            "„Ich bin der Weinstock, ihr seid die Reben. Ihr seid meine Freunde, wenn ihr tut, was ich euch gebiete. Wie sie mich verfolgt haben, werden sie auch euch verfolgen.“",
          "John.16.Descr":
            "„Der Geist wird die Welt der Sünde überführen. Er wird euch in alle Wahrheit leiten. Eure Trauer wird sich in Freude verwandeln. Ich gehe zum Vater.“",
          "John.17.Descr":
            "Jesus sagt: „Vater, ich habe deinen Namen denen offenbart, die du mir gegeben hast. Heilige sie in der Wahrheit. Mögen alle, die an mich glauben, eins sein.“",
          "John.18.Descr":
            "Judas veratet Jesus an die Hohepriester. Petrus verleugnet ihn. Er wird vom Pilatus verurteilt. Jesus sagt: „Mein Reich ist nicht von dieser Welt.“",
          "John.19.Descr":
            "Die Soldaten nehmen Jesus und kreuzigten ihn. Er sagt: „Es ist vollbracht“ und gibt seinen Geist auf. Ein Soldat durchbohrt seine Seite mit einem Speer.",
          "John.20.Descr":
            "Maria geht zum Grab und findet es leer. Jesus begegnet ihr. Er kommt und zeigt sich den Jüngern. Thomas sagt: „Mein Herr und mein Gott!“",
          "John.21.Descr":
            "Jesus zeigt sich nochmals, als die Jünger fischen. Er sagt zu Petrus: „Liebst du mich? Weide meine Schafe.“ Der geliebte Jünger hat dieses Zeugnis abgelegt.",
          "John.1.1": "Jesus Christus – das Mensch gewordene Wort Gottes",
          "John.1.19": "Johannes der Täufer über sich selbst",
          "John.1.29": "Johannes der Täufer über Jesus Christus",
          "John.1.35": "Die ersten Jünger Jesu",
          "John.1.43": "Philippus und Natanaël",
          "John.2.1": "Die Hochzeit in Kana",
          "John.2.13": "Der Tempel – Haus Gottes oder Kaufhaus?",
          "John.2.23": "Jesus kennt die Menschen",
          "John.3.1":
            "Jesus und Nikodemus: Die Notwendigkeit, von neuem geboren zu werden",
          "John.3.22": "Der Auftrag Johannes’ des Täufers und der Auftrag Jesu",
          "John.4.1":
            "Jesus und die samaritanische Frau: Das Wasser, das den Durst für immer löscht",
          "John.4.27": "Glaube der Samaritaner – Vom Erntefeld Gottes",
          "John.4.43": "Jesus heilt den Sohn eines königlichen Beamten",
          "John.5.1": "Heilung eines Kranken am Sabbat",
          "John.5.19": "Jesu Vollmacht: die Vollmacht des Sohnes",
          "John.5.31": "Die Glaubwürdigkeit der Aussagen Jesu über sich selbst",
          "John.6.1": "Jesus gibt einer großen Menschenmenge zu essen",
          "John.6.16": "Jesus geht auf dem Wasser",
          "John.6.22": "Die Menschenmenge sucht Jesus",
          "John.6.26": "Jesus Christus – das Brot des Lebens",
          "John.6.35": "Wer glaubt, hat ewiges Leben",
          "John.6.48": "Wer dieses Brot isst, wird leben in Ewigkeit",
          "John.6.60": "Viele Jünger wenden sich von Jesus ab",
          "John.6.67": "Das Bekenntnis des Petrus",
          "John.7.1": "Jesus lässt sich nicht zu vorzeitigem Handeln drängen",
          "John.7.10": "Jesus auf dem Laubhüttenfest in Jerusalem",
          "John.7.25": "Jesus im Widerstreit der Meinungen",
          "John.7.37": "Jesu Angebot: das Wasser des Lebens",
          "John.7.40":
            "Ist Jesus der Messias? Meinungsverschiedenheiten im Volk",
          "John.8.1":
            "Jesus und die Frau, die beim Ehebruch ertappt wurde: Freispruch statt Verurteilung",
          "John.8.12": "Jesus Christus – das Licht der Welt",
          "John.8.21": "Woher Jesus kommt und wohin er geht",
          "John.8.31": "Wirklich frei – nur durch Jesus",
          "John.8.37": "Kinder Abrahams oder Kinder des Teufels?",
          "John.8.48": "Jesus Christus – größer als Abraham",
          "John.9.1": "Heilung eines Blindgeborenen am Sabbat",
          "John.9.13": "Verhör des Geheilten durch die Pharisäer",
          "John.9.24": "Verstoßung des Geheilten",
          "John.9.35":
            "Das Bekenntnis des Blindgeborenen – die Blindheit der Sehenden",
          "John.10.1": "Das Bild vom Hirten und seinen Schafen",
          "John.10.7": "Jesus Christus – die Tür zu den Schafen",
          "John.10.11": "Jesus Christus – der gute Hirte",
          "John.10.22":
            "In der Hand des Hirten geborgen. Die Einheit von Vater und Sohn",
          "John.10.31":
            "Vorwurf der Gotteslästerung. Die Auseinandersetzung spitzt sich zu",
          "John.11.1": "Krankheit und Tod des Lazarus",
          "John.11.17": "Jesus Christus – die Auferstehung und das Leben",
          "John.11.28": "Jesus weint",
          "John.11.38": "Die Auferweckung des Lazarus",
          "John.11.45":
            "Der Beschluss des Hohen Rates: Einer muss für alle sterben",
          "John.12.1": "Die Salbung Jesu in Betanien",
          "John.12.12": "Der Einzug in Jerusalem",
          "John.12.20": "Menschen nichtjüdischer Herkunft wollen Jesus sehen",
          "John.12.27": "Jesus kündigt seinen Tod an",
          "John.12.37":
            "Rückblick auf Jesu öffentliches Wirken: Der Unglaube des jüdischen Volkes",
          "John.12.42": "Folgen des Glaubens und des Unglaubens",
          "John.13.1": "Jesus wäscht seinen Jüngern die Füße",
          "John.13.12": "Die Bedeutung der Fußwaschung",
          "John.13.21": "Ankündigung des Verrats",
          "John.13.31":
            "Die Herrlichkeit des Menschensohnes und die Herrlichkeit Gottes",
          "John.13.33": "Das neue Gebot",
          "John.13.36": "Jesus kündigt an, dass Petrus ihn verleugnen wird",
          "John.14.1": "Jesus Christus – der Weg zum Vater",
          "John.14.8": "Wer den Sohn sieht, sieht den Vater",
          "John.14.15": "Der Heilige Geist – Jesu Stellvertreter",
          "John.14.25":
            'Jesus sagt: "Steht auf, wir wollen von hier weggehen!"',
          "John.15.1": "Jesus Christus – der Weinstock",
          "John.15.9": "In der Liebe Jesu bleiben",
          "John.15.18": "Der Hass der Welt auf die Jünger Jesu",
          "John.16.4": "Das Wirken des Heiligen Geistes",
          "John.16.5": "Das Wirken des Heiligen Geistes",
          "John.16.16":
            "Die Traurigkeit der Jünger wird sich in Freude verwandeln",
          "John.16.25": "Jesu Sieg über die Welt",
          "John.17.1": "Jesus betet … … für sich selbst",
          "John.17.6": "… für seine Jünger",
          "John.17.20": "… für alle, die an ihn glauben werden",
          "John.18.1": "Die Gefangennahme Jesu",
          "John.18.12": "Jesus vor Hannas",
          "John.18.15": "Petrus verleugnet Jesus",
          "John.18.19": "Das Verhör vor dem Hohenpriester",
          "John.18.25": "Petrus verleugnet Jesus noch einmal",
          "John.18.28": "Jesus vor Pilatus",
          "John.18.38": "Die Verurteilung Jesu",
          "John.19.1": "Jesus wird von den Soldaten misshandelt und verspottet",
          "John.19.6": "Jesus antwortet Pilatus nicht",
          "John.19.16": "Die Kreuzigung Jesu",
          "John.19.17": "Die Kreuzigung Jesu",
          "John.19.28": "Der Tod Jesu",
          "John.19.31": "»Der, den sie durchbohrt haben«",
          "John.19.38": "Das Begräbnis Jesu",
          "John.20.1": "Das leere Grab: Jesus ist auferstanden",
          "John.20.10": "Der Auferstandene erscheint Maria aus Magdala",
          "John.20.19": "Der Auferstandene erscheint den Jüngern",
          "John.20.24": "Jesus und Thomas: Vom Unglauben zur Anbetung",
          "John.20.30": "Warum dieses Buch geschrieben wurde",
          "John.21.1":
            "Der Auferstandene erscheint seinen Jüngern am See von Tiberias",
          "John.21.15": "Jesus und Petrus: Erneuertes Vertrauen",
          "John.21.20":
            "Petrus und der Jünger, den Jesus besonders liebte: Unterschiedliche Wege in der Nachfolge",
          "John.21.24": "Schlusswort",
"John.1.1.descr": `Johannes zeigt Jesus in diesen ersten Versen als den, der ganz Mensch und ganz Gott ist (siehe auch Kol 2,9). 
Obwohl er - das Wort - Fleisch wurde und unter uns lebte (1,14) und uneingeschränkt Mensch wurde, hörte er nie auf, der ewige Gott und Quelle des Lebens zu sein. Johannes schrieb dieses Evangelium mit der Absicht, um zum Glauben an diesen Jesus und zum Vertrauen auf ihn zu ermutigen. 
In welchen Fragen und Lebensbereichen willst du in den nächsten drei Monaten in deinem Glauben an Jesus gestärkt werden?`,
"John.1.19.descr": `Johannes der Täufer bezeichnet sich selbst als Stimme, die in der Wüste ruft: "Ebnet den Weg für das Kommen des Herrn" (1,23). 
Welche Wege in deinem Leben müssen vielleicht noch geebnet werden, damit Jesus freien Zugang hat? 
Und wo kannst du Jesus einen Weg ebnen für Menschen in deinem Umfeld?`,
"John.1.29.descr": `Johannes der Täufer bezeichnet Jesus als das Lamm Gottes, das die Sünde der Welt wegnimmt (1,29). 
Wie hat Jesus die Sünden in deinem Leben weggenommen und wie beeinflusst diese Tatsache dein tägliches Leben?`,
"John.1.35.descr": `Andreas bringt seinen Bruder Simon zu Jesus, um ihm den Retter zu zeigen. Und in den nächsten Versen wird Philippus Nathanael von Jesus erzählen und ihn auffordern, sich selbst ein Bild von Jesus zu machen (1,46). 
Gibt es jemanden in deinem Leben, den du zu Jesus bringen kannst? 
Den du einladen kannst, mitzukommen und sich selbst zu überzeugen?`,
"John.1.43.descr": `Was auch immer dort unter dem Feigenbaum pasiert ist, Nathanael weiss sich von Jesus "gesehen". 
Hast du erlebt, dass Jesus dich auf ähnliche Weise sieht und kennt? 
Welche Auswirkungen hatte das auf deinen Glauben?`,
"John.2.1.descr": `Das erste Wunder Jesu: Wasser wird zu Wein bei der Hochzeit zu Kana. 
Wie erlebst du Jesu verwandelnde Kraft in deinem eigenen Leben? 
Wo wünschst du dir eine solche Verwandlung?`,
"John.2.13.descr": `Jesus reinigt den Tempel und vertreibt die Händler (2,15). 
Was muss in deinem Leben gereinigt werden, damit es ein "Haus des Gebets" und unser Körper ein "Tempel des Heiligen Geistes" (1. Kor 6,19) sein kann? 
Wie kannst du sicherstellen, dass du Jesus den Platz gibst, den er in deinem Leben verdient?`,
"John.3.1.descr": `Die Formulierung «aus Wasser geboren werden» wird in der Regel als Hinweis auf die persönliche Umkehr zu Gott (Busse) und die christliche Taufe verstanden. 
Was meinte Jesus mit der Formulierung, dass wir «aus Geist geboren werden» müssen? 
Hast du dies persönlich erlebt?`,
"John.3.22.descr": `«Er muss immer grösser werden und ich immer geringer» (3,30): 
Kannst du dies über deinem Leben ebenfalls aussprechen - und was bedeutet es ganz praktisch, dass Jesus immer mehr Einfluss in deinem Leben bekommen soll?`,
"John.4.1.descr": `Erlebst du, wie Jesus deinen Durst immer wieder löscht und du genug hast, um auch anderen «Wasser des Lebens» zu trinken zu geben?`,
"John.4.27.descr": `Die Frau aus Samarien lässt ihren Wasserkrug stehen und erzählt allen von ihrer Begegnung mit Jesus (4,28). 
Wann hast du das letzte Mal alles stehen und liegen lassen, um anderen zu erzählen, was du mit IHM erlebt hast?`,
"John.4.43.descr": `Jesus sagt etwas vorwurfsvoll, dass wir Menschen oft erst glauben können, wenn wir Wunder und Zeichen erleben (4,48). 
Braucht dein Glaube Wunder?`,
"John.5.1.descr": `Unter all den Kranken, Blinden und Gelähmten heilt Jesus an diesem Tag nur einen einzigen Langzeit- Kranken (5,3-5). 
Wie erklärst du dir das Verhalten von Jesus? 
Ist Jesus an all den anderen Kranken nicht interessiert?`,
"John.5.19.descr": `Jesus sieht sich ganz in der Abhängigkeit von seinem himmlischen Vater: Er kann nur tun, was er seinen Vater tun sieht (5,19). 
Wenn schon Jesus sich so vollständig dem Willen Gottes unterordnete, welche Bedeutung hat dies für unser alltägliches Leben und unsere Gebete?`,
"John.5.31.descr": `Jesus provoziert mit der Aussage, dass das ewige Leben nicht in der Schrift, sondern bei ihm zu finden ist (5,39-40). 
Wo suchst du das «ewige Leben»?`,
"John.6.1.descr": `Jesus will von den Menschen nicht zum König gekrönt werden (6,15). 
Warum entzieht sich Jesus den Menschen, obwohl er der «König der Könige» ist?`,
"John.6.16.descr": `Stürme scheinen zum Leben zu gehören. 
In welcher Sturmsituation brauchst du den Zuspruch von Jesus: «Hab keine Angst, ich bin's!»?`,
"John.6.22.descr": `Manchmal scheint Jesus plötzlich weg zu sein. 
Bist du jemand, der die bekannten Orte verlassen kann und Jesus auch am anderen Ufer sucht (6,25)?`,
"John.6.26.descr": `Warum suchst du Jesus: Weil dein Hunger gestillt werden soll oder weil es dir um Jesus selbst geht (6,27)?`,
"John.6.35.descr": `Wir Menschen suchen an verschiedensten und oft auch unmöglichsten Orten nach Leben: 
Genügt es dir, in Jesus das Brot des Lebens zu haben (6,41)?`,
"John.6.48.descr": `Jesus provoziert die damaligen Juden mit der Aufforderung, sein Fleisch zu essen und sein Blut zu trinken. 
Könnte hier mehr gemeint sein als nur ein Hinweis auf das Abendmahl?
Und was genau?`,
"John.6.60.descr": `Was hindert heute Menschen, Jesus nicht (mehr) nachzufolgen? 
Vergleiche dazu Vers 66. "Der Geist ist es, der lebendig macht." Dieser Vers ist wie das Benzin im Tank im Leben eines Christen. 
Was hilft dir, dein geistliches Leben immer neu mit Gottes Worten zu füllen?`,
"John.6.67.descr": `Was würdest du Jesus antworten, wenn er dir diese Frage stellen würde? 
Vergleiche dazu den Vers 67. 
Notiere dir stichwortartig, was dir in/mit Jesus alles geschenkt ist!`,
"John.7.1.descr": `Aus welchem Grunde hassen Menschen (Welt) noch heute Jesus? 
Vergeliche dazu den Vers 7. Offensichtlich wollen die Brüder eine bejubelte Anerkennung von Jesus. 
Wo sind wir als Christen und Gemeinde in ähnlicher Versuchung?`,
"John.7.10.descr": `Jesus bleibt von Menschen unabhängig und wartet stets auf die Anweisung des Vaters. Damit wählt er den Weg des Kreuzes, uns zugute. 
Was löst diese Tatsache in dir aus? 
Praktischer Gehorsam, wie in Vers 17 beschrieben, lässt die göttliche Inspiration des Wortes Gottes in unserem Leben als Realität erfahrbar werden. 
Welche Erfahrungen hast du damit gemacht?`,
"John.7.25.descr": `Der Streit um den "echten" Messias spitzt sich zu: Die Gegner werden mit Jesus und seinen provokativen und doch geheimnisvollen Worten nicht fertig. 
Wird Israel Jesus noch aufnehmen? 
Werden wir unsere noch verbleibende Lebensfrist richtig nutzen?`,
"John.7.37.descr": `Welche Parallelen sind in Vers 17 und 38 enthalten? 
Warum wohl ist diese Betonung Jesus so wichtig? Wer aus dieser Quelle trinkt, d.h. Jesus vertraut bzw. ihm gehorcht, wird selbst für andere zur Quelle. 
Hast du den Heiligen Geist empfangen? 
Wenn nicht, was kannst du heute tun, damit du ihn empfängst?`,
"John.7.40.descr": `Der heftige Streit um Jesus entbrennt erneut. Selbst das Verhaftungs-Kommando bestätigt die Einzigartigkeit Jesu. 
Verlässt dich manchmal der Mut zu Jesus zu stehen? 
Da kann uns Nikodemus helfen: tapfer und klug nimmt er Jesus in Schutz.`,
"John.8.1.descr": `“Ich verurteile dich auch nicht; du darfst gehen. Sündige von jetzt an nicht mehr!”, sagte Jesus zu der Frau. 
Wie begegnest du Menschen, die sich in Sünde verstrickt haben?`,
"John.8.12.descr": `Jesus erklärt, dass er das Licht der Welt ist und dass diejenigen, die ihm folgen, nicht in der Finsternis wandeln werden. 
In welchen Bereichen deines Lebens benötigst du Jesu Licht, um Klarheit und Führung zu finden?`,
"John.8.21.descr": `Jesus spricht über seinen bevorstehenden Tod und seine Rückkehr zum Vater, und viele verstehen ihn nicht. 
Wie gehst du mit Dingen um, die du in deinem Glauben nicht vollständig verstehst?`,
"John.8.31.descr": `Jesus sagt, dass die Wahrheit uns frei machen wird, wenn wir in seinem Wort bleiben. 
Welche Wahrheiten aus Gottes Wort haben dich bereits in deinem Leben befreit?`,
"John.8.37.descr": `Jesus erklärt, dass diejenigen, die von Gott sind, die Worte Gottes hören. 
Wie hörst du auf Gottes Stimme in deinem Leben?`,
"John.8.48.descr": `Die Menschen werfen Jesus vor, dass er von einem Dämon besessen sei, doch er antwortet, dass er Gott ehrt. 
Wie gehst du mit Vorwürfen oder Missverständnissen bezüglich deines Glaubens um?`,
"John.9.1.descr": `Jesus heilt einen Mann, der von Geburt an blind war, und offenbart dadurch die Werke Gottes. 
In welchen Bereichen deines Lebens hast du Gottes Wirken und Heilung erfahren?`,
"John.9.13.descr": `Damals durften keine Wunder am Sabbat geschehen. Heute widersprechen Wunder unserer menschlichen Vernunft. 
Wie hast du es mit wundersamen Handeln Gottes hier und heute?`,
"John.9.24.descr": `Unsere persönliche Geschichte, wie Jesus unser Leben verändert hat, ist kraftvoll: 
Kannst du wie der geheilte Blinde sagen, was Jesus in deinem Leben getan hat?`,
"John.9.35.descr": `Eigentlich hat nur der Blinde «gesehen»; die scheinbar Sehenden waren blind. 
Zu welcher Gruppe gehörst du?`,
"John.10.1.descr": `Jesus sagt, dass die Schafe die Stimme ihres Hirten kennen. 
Wie klingt die Stimme von Jesus und woran erkennst du deinen Hirten?`,
"John.10.7.descr": `Jesus ist gekommen, um Leben - Leben im Überfluss bringen. 
Wo hast du erlebt, dass er dich ins volle Leben geführt hat?`,
"John.10.11.descr": `Der Auftrag von Jesus war es, sein Leben als Opfer hinzugeben. 
Was ist eigentlich dein Auftrag, den dir der himmlische Vater gegeben hat?`,
"John.10.22.descr": `Jesus sagt, dass seine Taten für sich sprechen und ihn als Sohn seines himmlischen Vaters ausweisen. 
Was sagen deine Taten über dich aus?`,
"John.10.31.descr": `Die Menschen erkennen, dass "alles, was er (Joh. der Täufer) über diesen Mann gesagt hat" sich als wahr erwiesen hat. Jesus hat sich als wahr erwiesen, deshalbt glaubten viele an ihn. 
Warum glaubst du an Jesus?`,
"John.11.1.descr": `Jesu Aussagen sind nicht immer klar und einfach verständlich. Aber auf die Frage der Jünger hin, gibt er ihnen eine klare Antwort. 
Was willst du Jesus fragen, was du noch nicht verstehst?`,
"John.11.17.descr": `Jesus sagt: "Ich bin die Auferstehung und das Leben." 
In wem oder in was suchst du eine erfolgreiche Zukunft und ein erfülltes Leben?`,
"John.11.28.descr": `"Jesu Augen füllten sich mit Tränen." Jesus fühlte menschliche Gefühle wie Zorn, Schmerz und Mitleid. 
Welche ungerechten Umstände füllen deine Augen mit Tränen? Mit wem hast du Mitleid?`,
"John.11.38.descr": `"... (dein Name), komm heraus!" Jesus ruft auch dich zurück ins Leben. 
In welchem toten Bereich in deinem Leben hörst du Jesus nach dir rufen? 
Mach einen Schritt auf ihn, das wahre Leben zu und werde lebendig.`,
"John.11.45.descr": `"Einer für Alle und Alle für Einen". Jesus hat mit seinem stellvetrentenden Tod für uns alle die Freiheit errungen. Einer ist für alle gestorben. 
Bist du bereit, jetzt auch ganz für Jesus zu leben?`,
"John.12.1.descr": `"Arme, um die ihr euch kümmern könnt, wird es immer geben." 
Um wen kümmerst du dich, der arm ist? 
Wem kannst du heute oder in der kommenden Woche ganz konkret in seiner Armut helfen?`,
"John.12.12.descr": `Im „Hosianna“ kommt die Erlösungs-Sehnsucht der Menschen zum Ausdruck. Doch Jesus sucht nicht „Nachläufer“ (Vgl. einige Tage später: Joh. 19,15) sondern „Nachfolger“. 
Was ist der Unterschied?`,
"John.12.20.descr": `Mit „sterben“ ist auch das Zurückstellen meines eigenen Willens gemeint, damit gute Früchte daraus entehen können. 
Was könnte dies konkret für dein Leben bedeuten? 
Was ist die bleibende Folge davon?`,
"John.12.27.descr": `Der „Weg nach oben“ ist für viele ein Traumziel. Bei Jesus führte dieses Ziel ans Kreuz. «Nutzt diese Zeit (wo das Licht da ist), bevor euch die Dunkelheit überfällt“. 
Was könnte dies für dich bedeuten? 
Wie kannst du diese Zeit am besten ausnutzen?`,
"John.12.37.descr": `So viele Menschen um uns herum lehnen Jesus ab, das schmerzt uns – doch schon Jesus hat diese Ablehnung erlebt! Umso grösser leuchtet die Liebe Gottes, die dadurch nichts an Strahlkraft einbüsst. Das soll auch uns ermutigen! 
Wie gehst du mit Ablehnung um? 
Wäre es an der Zeit, etwas mutiger zu werden?`,
"John.12.42.descr": `Jesus fasst seine Berufung nochmals zusammen: Alles was ER sagt und tut, kommt vom Vater. Umso grösser ist die Sorgfaltspflicht, mit der wir den Umgang mit seinem Worten pflegen. 
Was sagt der Text über die positiven und negativen Folgen dieser Verantwortung?`,
"John.13.1.descr": `Offenbar war keiner der Jünger zu Beginn der Feier für diesen „niederen“ Liebesdienst bereit. Jesus zeigt, dass diese Fusswaschung auch symbolischen Charakter hat. Es ist ein Bild für unsere notwendige und ganzheitliche Reinigung durch das Kreuzesgeschehen von Jesus. (Lies Kapitel 5 im Epheserbrief) Wie eine tägliche Fusswaschung aussehen kann und was diese beinhaltet, kannst du auch in 1. Joh 1:7 nachlesen. 
Wem kannst du heute die Füsse waschen? 
Und wen kannst du bitten, dir die Füsse zu waschen?`,
"John.13.12.descr": `Die ethische Bedeutung der Fusswaschung: Wir dürfen dem Vorbild Jesu untereinander (in der Gemeinde) nacheifern. Denn Jesus dehnt, in Vers 20, die Sendung des Vaters auf seine Nachfolger aus. 
Wie beeinflusst dies dein Verhalten?`,
"John.13.21.descr": `Die Geschichte vom Verrat von Judas ist allgemein gut bekannt. Judas ist einer der 12 Jünger - er ist also von Jesus berufen und über drei Jahre Tag und Nacht mit ihm unterwegs. Trotzdem verrät er Jesus. 
Ist es dir auch schon so ergangen? 
Wie gehst du damit um?`,
"John.13.31.descr": `Jesus gibt uns ein neues Gebot, dass wir uns untereinander lieben sollen. So, wie er es uns im Umgang mit seinen Jüngern vorgelebt hat. 
Werden wir als Gemeinde wohl von aussen daran erkannt, wie wir uns untereinander lieben? 
Wirst du persönlich an deiner Liebe zu deinen Nächsten als Christ erkannt?`,
"John.13.36.descr": `Hier findest du die zweite Ankündigung vom Verrat an Jesus. Voller Überzeugung spricht Petrus aus: "Ich will mein Leben für dich lassen!" 
Kommt dir diese Fehleinschätzung bekannt vor in deinem Leben? 
Hast du auch schon mal eine solche Situation erlebt?`,
"John.14.1.descr": `Wir Menschen denken sehr verschieden, sind persönlich geprägt und nehmen unterschiedlich wahr. 
Könnte dies der Grund sein, wieso uns im Himmel auch verschiedene Wohnungen bereit stehen? 
Oder werden wir dort wohl eher als Grossfamilien wohnen? Wie denkst du über den Himmel?`,
"John.14.8.descr": `Jesus verheisst hier etwas wundervolles: Wer an ihn glaubt, der kann die gleichen Werke vollbringen, wie Jesus - ja sogar noch grössere Dinge! 
Beziehst du das auf die Wunder oder auf sein Wesen, seine Haltung und seine Umgangsformen?`,
"John.14.15.descr": `Hier drückt Jesus ein sehr herausfordernder Zusammenhang zwischen der Liebe zu ihm und Gehorsam aus: Wenn wir ihn lieben, halten wir seine Gebote! 
Wie geht es dir mit dem Halten seiner Gebote in deinem Alltag? 
Zweifelst du an deiner Liebe zu ihm oder seiner Liebe zu dir?`,
"John.14.25.descr": `Zum Schluss des Abendmahls mit den vielen verschiedenen Themen, die Jesus mit den Jüngern noch besprochen hat, sagt er ziemlich abrupt: 
Steht auf und lasst uns von hier weg gehen. 
Was bedeutet das wohl im Kontext zum Abendmahl damals und was bedeutet es wohl für dich heute?`,
"John.15.1.descr": `Jesus spricht davon, dass er der wahre Weinstock ist und wir die Reben (15,1-2). Bleiben wir in ihm, bringen wir viel Frucht. 
Wann hast du das letzte Mal bewusst erlebt, dass du in Jesus geblieben bist und daraus Frucht entstanden ist? 
Was bedeutet es für dich, von Jesus "beschnitten" zu werden, damit du mehr Frucht bringst (15,2)?`,
"John.15.9.descr": `Jesus fordert uns auf, in seiner Liebe zu bleiben und seine Gebote zu halten, um dadurch Freude zu erfahren (15,9-11). 
Wie erlebst du die Freude, die aus dem Gehorsam gegenüber seinen Geboten resultiert? 
Was bedeutet es für dich praktisch, einander so zu lieben, wie Jesus uns geliebt hat (15,12)?`,
"John.15.18.descr": `Jesus warnt seine Jünger, dass die Welt sie hassen wird, weil sie nicht von der Welt sind, so wie er nicht von der Welt ist (15,18-19). 
Hast du jemals. Anfeindungen oder Ablehnung erfahren, weil du an 16,1-4 Jesus glaubst? 
Wie gehst du damit um, und wie hilft dir das Wissen, dass Jesus dies bereits vorausgesagt hat?`,
"John.16.5.descr": `Jesus verspricht seinen Jüngern den Heiligen Geist, der sie in alle Wahrheit führen wird (16,13). 
In welchen Situationen hast du die Führung des Heiligen Geistes in deinem Leben besonders deutlich gespürt? 
Wie kannst du dich im Alltag mehr auf den Heiligen Geist verlassen und von ihm lernen?`,
"John.16.16.descr": `Jesus spricht über seine bevorstehende Abreise und das Wiedersehen, das den Jüngern große Freude bringen wird (16,22). 
Wie gehst du mit Zeiten der Trauer und des Verlusts um, und wo findest du Trost in der Verheissung, dass Jesus uns wiedersehen wird? 
Was bedeutet es für dich, in Jesu Namen zu bitten und die Fülle der Freude zu erleben (16,24)?`,
"John.16.25.descr": `Jesus verheisst seinen Jüngern Frieden, auch wenn sie in der Welt Bedrängnis erfahren werden (16,33). 
Wo in deinem Leben hast du den Frieden Jesu trotz schwieriger Umstände erlebt? 
Wie stärkt dich die Zuversicht, dass Jesus die Welt überwunden hat, im Umgang mit Herausforderungen und Krisen?`,
"John.17.1.descr": `Jesus betet zu seinem Vater und bittet um die Verherrlichung, die ihm gebührt (17,1). Er reflektiert über das ewige Leben und seine Vollendung des Werkes auf der Erde (17,4). 
Wie kannst du in deinem Leben Gott verherrlichen und das Werk, das er dir gegeben hat, vollenden? 
Was bedeutet für dich das ewige Leben, das Jesus beschreibt, als das Erkennen des einzigen wahren Gottes und Jesu Christi (17,3)?`,
"John.17.6.descr": `Jesus betet für die Einheit unter den Gläubigen. 
Ist dir die Einheit der Christen ebenfalls ein Anliegen und wie kannst du heute ganz konkret etwas zu dieser Einheit beitragen?`,
"John.17.20.descr": `Die Menschen sollen an der Einheit der Gläubigen erkennen, dass Jesus der von Gott Gesandte ist (17,21.23). 
Was bedeutet es für dich, wenn die Kraftlosigkeit des christlichen Zeugnisses mit der mangelnden Einheit und Liebe der Christen zusammenhängt?`,
"John.18.1.descr": `Jesus nimmt den Kelch des Leidens aus der Hand seines Vaters. 
Welches Leiden solltest du ebenfalls aus Gottes Hand annehmen, und welchem Leiden darfst du aus dem Weg gehen?`,
"John.18.12.descr": `Wie würdest du das Verhalten von Jesus im Gespräch mit dem Hohepriester Hannas beschreiben, und was könnte dies für dich in herausfordernden Situationen bedeuten?`,
"John.18.15.descr": `Kennst du in deinem persönlichen Leben Momente, in denen du am wärmenden Feuer sitzt und Jesus verleugnest?`,
"John.18.28.descr": `Jesus wurde geboren und ist in die Welt gekommen, um für die Wahrheit Zeugnis abzulegen. Was meint Jesus hier mit «Wahrheit»?`,
"John.18.38.descr": `Jesus wird dem Tod überliefert, und der Räuber Barabbas kommt frei: 
Wie erkärst du dir diese  «schreiende Ungerechtigkeit» damals?`,
"John.19.1.descr": `Pilatus hofft, das aufgebrachte Volk dadurch zufriedenzustellen, dass er Jesus auspeitschen und verspotten lässt. Er lässt sich von der Furcht vor Menschen leiten. 
Kennst du diese Furcht vor Menschen, ihren Reaktionen und Aussagen ebenfalls? 
In der Bibel steht, dass Weisheit mit Gottesfurcht beginnt. Wie kannst du zukünftig Gott mehr gehorchen als den Menschen und ihren Erwartungen? 
Ein Kommentar: 
Die Soldaten flochten eine Krone aus Dornenzweigen: Könige tragen Kronen, aber keine Kronen der Folter. Diese Krone, die den Kopf des Königs, der sie trug, einschnitt, durchbohrte und blutig machte. Jesus hat diese Qualen und Schmerzen für dich ertragen. 
Dann legten sie ihm einen Purpurmantel um: Könige und Herrscher trugen oft Purpur, weil die Farbstoffe zur Herstellung dieser Farbe teuer waren. Der Purpurmantel war als grausame Ironie gedacht. Und so trug Jesus auch allen Spott und Hohn an deiner Stelle. Nimmst du sein Angebot an, dass du in seinen Wunden dein Heil findest? Vergleiche 1. Petrus 2:24.`,
"John.19.6.descr": `Jesus wählt seine Worte mit Bedacht und spricht nur wenige Worte. Diese Worte sind dafür umso eindrucksvoller, wenn wir die Reaktionen von Pilatus genau analysieren. 
Wie gehst du mit deinen Worten um? Machst du viele Worte um Nichts oder wählst du treffende und wahre Worte? 
Bist du sprachfähig, wenn es um die Identität von Jesus geht?`,
"John.19.17.descr": `"Jesus von Nazaret, der König der Juden". Die Identität Jesu und seine Rolle in der Menschheistgeschichte war von Beginn an umstritten. Die Juden wollten ihn nicht als König und lehnten seine Herkunft ab. Dennoch bleibt Jesus, wer er ist. 
Ist Jesus auch dein König? 
Wie verhältst du dich deinem König gegenüber - und müsstest du etwas an deiner Haltung und Einstellung ihm gegenüber ändern?`,
"John.19.28.descr": `"Es ist vollbracht!" Er hat es für dich vollbracht. Die Erlösung ist allein auf Gottes Tun zurückzuführen. 
Glaubst du das? 
Willst du heute wieder oder neu das Geschenk der Gnade und Vergebung annehmen?`,
"John.19.31.descr": `Jesus Christus ist "der, den sie durchbohrt haben". Er wurde an unserer Stelle durchbohrt. Er hat deinen Platz eingenommen und ist für dich gestorben. 
Wie kannst du heute Gott dafür deinen Dank ausrichten? 
Wie gestaltest du ein Leben aus dieser Dankbarkeit und in neuer, geschenkter Freiheit von Schuld?`,
"John.19.38.descr": `Jesus wurde in einem neuen Grab begraben. Er war wirklich tot und sein Körper war ohne Leben. 
Hast du Dinge in deinem Leben, die nach Tod, Zerstörung oder Leid riechen? 
Musstest du geliebte Menschen, Träume oder Hoffnungen begraben? 
Bring die Trauer zu Jesus im Gebet und trauere mit ihm über deinem Verlust.`,
"John.20.1.descr": `"Jesus ist auferstanden!" - Als der Jünger, den Jesus besonders lieb gehabt hatte, ins Grab hineinging und alles sah, da glaubte er. Was musst du sehen, um Glauben zu können? 
Was gibt deinem Glauben Sicherheit? 
Die ersten Christen und Apostel waren so voller Glauben und Überzeugung, dass sie alle bereit waren, für diese Wahrheit zu sterben.`,
"John.20.10.descr": `Maria Magdalena begegnet dem auferstandenen Jesus und erkennt ihn zunächst nicht (20,14). Sie konnte ihn nicht sehen, weil sie nicht erwartete, ihn zu sehen. Dann sprach er sie mit ihrem Namen an und augenblicklich erkannte sie ihn (20,16). 
Wie würdest du reagieren, wenn Jesus dir persönlich begegnen würde? Hörst du, wie er dich unverkennbar bei deinem Namen ruft?`,
"John.20.19.descr": `Jesus erscheint den Jüngern in ihrer Enttäuschung und Angst und spricht: „Friede sei mit euch!“ (20,19). 
Wie erlebst du den Frieden Jesu in deinem Leben? 
Wo wünschst du dir, dass Jesus kommt und Frieden und Freude bringt?`,
"John.20.24.descr": `Thomas zweifelt an der Auferstehung und möchte Jesus sehen, um zu glauben (20,25). Diese ehrliche Zweifel kritisiert Jesus nicht. 
Jesus begegnet Thomas so, wie er es braucht. Hast du auch Zweifel? 
Dann bleib nicht an diesem Punkt stehen, sondern geh auf die Suche nach Antworten. Jesus wird dir begegnen und deine Zweifel dürfen zu einer Vertiefung deines Glaubens führen.`,
"John.20.30.descr": `Johannes fasst seine Absicht nochmals zusammen: 
Er hat das Wirken Jesu aufgeschrieben, damit wir glauben und durch den Glauben Leben haben (20,31). 
Wie hat dich das Lesen des Joh.evangeliums in den letzten Wochen in deinem Glauben gestärkt? 
Erzähl jemandem von deiner Erfahrung und deinen Erlebnissen.`,
"John.21.1.descr": `Was für eine schöne Szene: 
Nach all dem Trubel der letzten Tage bereitet Jesus seinen Jüngern ein Frühstück vor und lädt sie ein, gemeinsam mit ihm zu essen. 
Wo lädt dich Jesus heute ein, dich einfach mit ihm "hinzusetzen", Gemeinschaft mit ihm zu haben und versorgt zu werden?`,
"John.21.15.descr": `Nachdem Jesus mit dem Frühstück die Jünger physisch gestärkt hatte und einen sicheren Raum geschaffen hatte, stärkt er Petrus nach seiner Verleugnung (Joh 18) noch ganz persönlich. Jesus fragt Petrus dreimal, ob er ihn liebt, und gibt ihm den Auftrag, seine Schafe zu weiden (21,17). 
Wie antwortest du Jesus auf die Frage: „Liebst du mich?“ 
Welche Aufgaben hast du durch deine Liebe zu Jesus übernommen?`,
"John.21.20.descr": `Petrus fragt nach dem Schicksal des Jüngers, den Jesus liebte (21,21). Auch wir stehen in Gefahr, dass wir uns in unserem Glaubensleben mit anderen vergleichen. 
Was bedeutet die Aufforderung von Jesus: "Folge du mir nach." (21,22) für dich?`,
        },
      },
    },
  });

export default i18n;
