import React, { Component } from 'react';
import WorkItem from './WorkItem';
import spotlight from './images/ideas.jpg';
import btap from './images/robot.jpg';
import bigml from './images/logic.jpg';
import waterchat from './images/chat.jpg';
import searchengine from './images/searchengine.jpg';
import fxrate  from './images/exchange.jpg';
import pmc from './images/puzzles.jpg';
import woodie from './images/adventurewoodie.png';
import mobilegame from './images/smartphone.jpg';
import aws from './images/cloudsetting.jpg';
import cloudlol from './images/cloud.jpg';
import attendance from './images/smartmobile.jpg';
import dashboard from './images/flowchart.jpg';
import './css/magnific-popup.css';

class Works extends Component {
  render() {
    return (
      <section className="module" id="works-section">
				<div className="container">
					<h2 className="module-title font-alt">Works</h2>
					<div className="row">
						<div className="col-sm-12">
							<ul id="filters" className="filter font-inc hidden-xs">
								<li><a href="#" data-filter="*" className="current wow fadeInUp">All</a></li>
								<li><a href="#" data-filter=".data" className="wow fadeInUp" data-wow-delay="0.2s">Data Science</a></li>
								<li><a href="#" data-filter=".web" className="wow fadeInUp" data-wow-delay="0.4s">Web</a></li>
								<li><a href="#" data-filter=".mobile" className="wow fadeInUp" data-wow-delay="0.8s">Mobile</a></li>
								<li><a href="#" data-filter=".network" className="wow fadeInUp" data-wow-delay="0.8s">Network</a></li>
							</ul>
						</div>
					</div>
					<ul id="works-grid" className="works-grid works-grid-4 works-grid-masonry works-hover-w">
						<WorkItem name="spotlight" title="Spotlight" avatar={spotlight} fullimg={spotlight} category="data web" 
							subtitle="A comprehensive analyzer to gauge market sentiment and to identify key ETF trends."
							tools="Python" year="2017" 
							desc="This is our project for the BLK HACK:2017 challenge, a comprehensive analyzer to gauge market sentiment and to identify key ETF trends.
							\nWe came up with this idea to answer one question that clients ask all the time:
							\nwhat are the most trending ETFs?
							\ninspired by the fact that there is no single place to find a solution and different business units look at various different data sources. We vision this analyzer as a holistic tool to deliver an unified message.
							\nThe tool incorporates multi-dimensional data: Flow, Trade, Web Traffic and natural language processing stats from Dow Jones News and Twitter.
							\nI primarily work on the NLP part. BlackRock's Text Analytics Platform (BTAP) hosts Dow Jones news corpus on its SolrCloud. I collect the newswire stats using Solr REST API and various request handlers provided by BTAP (which is actually my day job project). For the Twitter analytics, my team member streamed tweets using Twitter API, I fed the filtered tweets into Anaconda where I extracted term freq stats and sentiment stats using Natural Language Toolkit - NLTK.
							\nI helped with the web GUI part as well, where we visualized the multi dimension results and make the tool interactive. We used AngularJS as the web framework and Highcharts as the primary UI components.
							\nSpotlight won the Global Retail Tech business bounty champion." />
						{/* <WorkItem name="dashboard" title="Dashboard Lightweight Booting" avatar={dashboard} fullimg={dashboard} category="data network" 
							subtitle="A comprehensive analyzer to gauge market sentiment and to identify key ETF trends."
							tools="Java" year="2017" 
							desc="This is our project for the BLK HACK:2017 challenge, a comprehensive analyzer to gauge market sentiment and to identify key ETF trends.
							\nWe came up with this idea to answer one question that clients ask all the time:
							\n<b>what are the most trending ETFs?</b>
							\ninspired by the fact that there is no single place to find a solution and different business units look at various different data sources. We vision this analyzer as a holistic tool to deliver an unified message.
							\nThe tool incorporates multi-dimensional data: Flow, Trade, Web Traffic and natural language processing stats from Dow Jones News and Twitter.
							\nI primarily work on the NLP part. BlackRock's Text Analytics Platform (BTAP) hosts Dow Jones news corpus on its SolrCloud. I collect the newswire stats using Solr REST API and various request handlers provided by BTAP (which is actually my day job project). For the Twitter analytics, my team member streamed tweets using Twitter API, I fed the filtered tweets into Anaconda where I extracted term freq stats and sentiment stats using Natural Language Toolkit - NLTK.
							\nI helped with the web GUI part as well, where we visualized the multi dimension results and make the tool interactive. We used AngularJS as the web framework and Highcharts as the primary UI components.
							\nSpotlight won the Global Retail Tech business bounty champion." /> */}
						<WorkItem name="btap" title="Text Analytics On Demand" avatar={btap} fullimg={btap} category="data web network" 
							subtitle="On demand service to provide Natural Language Processing analytics."
							tools="Java, TypeScript/Angular 2, Python" year="2016" 
							desc="This is my primary work project when I was at Quantitative Tools Research team.
							\nText Analytics On Demand Service is part of BlackRock Text Analytics Platform (BTAP) which facilitates Natural Language Processing for all the researchers and developers across BlackRock.
							\nThis service provides basic building blocks using which you can turn text data into structured data and use it for a variety of different use cases. After you submit a piece of text to the service, the response from the service will contain:
							\nTerm counts, Sentiment, Entities and Parts of speech tagging.
							\nThe on-demand server is powered by Stanford CoreNLP library which is the state of art NLP package especially when it comes to Named Entity Recognition(More reads on my Twitter).
							\nAt client side, I developed an Angular 2 based web app to grab user pasted text, to initiate communication to the server and to visualize the returned NLP stats in a more intuitive/interactive manner. I also shared Java and Python tempalte client side code internally.
							\nClients talk to servers via BlackRock's proprietary messgaing system."/>
						<WorkItem name="bigml" title="Big Machine Learning" avatar={bigml} fullimg={bigml} category="data" 
							subtitle="ADVANCED MACHINE LEARNING IMPLEMENTATIONS WITH LARGE DATASETS."
							tools="JAVA, PYTHON" year="2015" repo="https://github.com/wedrinklatte/BigMachineLearning"
							desc="GuineaPig Naive Bayes: 
							Implement Naive Bayes algorithm on GuineaPig. First generate event counts from the training data, then convert the event counts to key value pairs (k,v) where k is a word, and v is some representation of all the counts for that word, following is to generate requests for word counts from the test file, join the flattened test documents with the reorganized event counts, and finally group the join result together so that you can classify the test documents.
							\nLogistic Regression SGD: 
							Implement scalable Logistic Regression in (regularized) Stochastic Gradient Descent using Java.
							\nDistributed SGD for Matrix Factorization on Spark: 
							Implement Large-Scale Matrix Factorization with Distributed Stochastic Gradient Descent (DSGD-MF) in Spark using Python.
							\nEfficient Approximate PageRank: 
							Implement the scalable Approximate PageRank “Snowball” algorithm to achieve Local Graph Partitioning and visualize the results."/>
						<WorkItem name="fxrate" title="FX Rate Prediction" avatar={fxrate} fullimg={fxrate} category="data" 
							subtitle="BIG DATA ANALYTICS PROJECT FOR FOREIGN EXCHANGE RATE FORECAST."
							credit="monkik" creditLink="https://www.flaticon.com/authors/monkik" creditLicense="CC 3.0"
							tools="JAVA, PYTHON, SCALA" year="2015" repo="https://github.com/wedrinklatte/Foreign-Exchange"
							desc="DataPrep: Create a labeled data matrix that can be used by a machine-learning algorithm for regression or classification.
							\nDecisionTree: Create a simple decision tree model to learn how to predict the labels given the data. This weak learner provides the foundation for the later more advanced ensemble method.
							\nRandomForest: Aggregate the decision tree weak learner into a non-map reduce random forest implementation. This provides the code-template that will be used to create the fully distributed ensemble method.
							\nCassandra: Re-configure the learning algorithm to read in data from Cassandra instead of reading from raw files. Finally store the results of the learning algorithm into the data store (performance metrics and eventually model).
							\nMRRandonForest: Create a MapReduce implementation of the random forest that have benn created in earlier assignments.
							\nSparkRF: Create a Spark implementation of the random forest method. Spark MLLib enables large in-memory parallel learning work to be done, and it can be much faster than MapReduce for certain tasks.
							\nFinalNTAP: Final Non-Technical Audience Presentation (NTAP)
							"/>
						<WorkItem name="waterchat" title="WaterChat" avatar={waterchat} fullimg={waterchat} category="mobile network" 
							subtitle="IOS APP: A RELIABLE MESSAGING SYSTEM UTILIZING WIRELESS MESH NETWORKING."
							tools="SWIFT, OBJECTIVE-C" year="2015" repo="https://github.com/xuehung/WaterChat"
							desc="WaterChat leverages Bluetooth and Apple's Multipeer Connectivity Framework to deliver messages to other iPhones without the need of traditional Wi­Fi and cellular service.
							\nThe application is built on a peer to peer architecture which is completely distributed without any centralized server involved.
							\nThe primary goal is to implement a chatting system built on a wireless ad hoc network, while providing available and efficient messaging service to users via multi­path forwarding.
							"/>
						<WorkItem name="pmc" title="PUBMED CENTRAL TOPIC VISUALIZATION" avatar={pmc} fullimg={pmc} category="data" 
							subtitle="ON DEMAND TOPIC MODELING AND VISUALIZATION FOR PUBMED DOCUMENTS."
							tools="JAVA, PYTHON, SCALA" year="2015" repo="https://github.com/wedrinklatte/PubmedCentralTopicVisualization"
							desc="The goal is to produce a visualization of the topics that most commonly co-occur in the pubmed documents with a user provided term or phrase.
							\nScikit-learn is the main machine learning library used. During the feature extraction phase, metrics such as tfidf are tf are experiemnted. Non-negative matrix factorization and Latent Dirichlet Allocation are both employed in the topic modeling phase. Visualization is driven by D3.
							\nMore info can be found in the lab notebook.
							"/>
						<WorkItem name="searchengine" title="SEARCH ENGINE" avatar={searchengine} fullimg={searchengine} category="data" 
							subtitle="AN INFORMATION RETRIEVAL PROGRAM DEVELOPED ON LUCENE."
							tools="Java" year="2015" repo="https://github.com/wedrinklatte/SearchEngines"
							desc="An information retrieval program that runs under Java 1.6 and uses classes from the Lucene search engine library.
							\nPhase 1: Boolean retrieval program supporting operators: OR, AND and NEAR/n.
							\nPhase 2: Add the BM25 and Indri ranking algorithms. Add operators: BM25 SUM and Indri AND.
							\nPhase 3: Add several new query operators: WINDOW, WAND, WSUM. Write structured queries that use sequential dependency models and different representations.
							\nPhase 4: Add query expansion capabilities.
							\nPhase 5: Add learning-to-rank capabilities to the program.
							\nSearch engine related works such as inverted list construction and statistical language model based input predictor construction, both using MapReduce programming model, are also discussed in my blog.
							"/>
						<WorkItem name="woodie" title="ADVENTURER WOODIE" avatar={mobilegame} fullimg={woodie} category="mobile" 
							subtitle="IOS GAME: CRAZY ADVENTURE WITH MR.WOODIE!"
							tools="OBJECTIVE-C" year="2015" repo="https://github.com/wedrinklatte/AdventurerWoodie"
							desc="Adventurer Woodie is a multi-level adventure game developed on iOS platform, using objective-C as the programming language, Cocos2D as the game engine and Chipmunk as the physics engine. Xcode and SpriteBuilder are the two primary software used to build this game.
							\nThe goal for players is to assist Mr.Woodie, the main character of the game, to proceed with his adventure as long as possible.
							\nPlayers can succeed the game by dragging woods to build safe path for Mr.Woodie, dragging the weapon to kill enemies and long pressing the screen to jump Mr.Woodie. For each level of the game, players are provided with infinite scrolling horizontal space but with varied adventure settings.
							"/>
						<WorkItem name="aws" title="CLOUD COMPUTING WITH AWS" avatar={aws} fullimg={aws} category="data network" 
							subtitle="CLOUD COMPUTING PROJECTS UTILIZING AMAZON WEB SERVICES."
							tools="PYTHON, JAVA, PHP" year="2014" repo="https://github.com/wedrinklatte/AWSProjects"
							desc="Project 1: Process part of a large-scale Wikipedia dataset using sequential programs, further extend to MapReduce streaming jobs on AWS Elastic MapReduce.
							\nProject 2: Work with an AWS API/SDK and programmatically manage resources on AWS. Benchmark a single instance's performance. Configure and Deploy an Elastic Load Balancer on AWS. Configure and Deploy Auto Scaling using Cloud Watch alarms on AWS. Develop programs that manage cloud resources, while dealing with resource failures and meeting budget constraints.
							\nProject 3: Study the differences between using flat files and databases when searching for data. Evaluate database performance differences caused by using various storage mechanisms available on AWS EC2. Evaluate the horizontal scaling options for databases in AWS, in terms of performance and costs. Evaluate partitioning (sharding) in databases for horizontal scaling. Evaluate various provisioned database services in AWS, in terms of performance and costs.
							\nProject 4: Generate inverted index for a 40GB text corpus using MapReduce programming model in the native Java framework with stop words (accessed via Distributed Cache) removed. Construct a statistical language model containing the probabilities of a word appearing after a phrase from the same text corpus and loaded it to HBase. Write a PHP based web interface that interacted with the HBase table and displayed predicted text while typing, similar to Google Instant
							"/>
						<WorkItem name="cloudlol" title="CLOUDLOL" avatar={cloudlol} fullimg={cloudlol} category="data network" 
							subtitle="A TWITTER ANALYTICS WEB SERVICE UTILIZING AMAZON WEB SERVICES."
							tools="PYTHON, JAVA, HIVEQL" year="2014" repo="https://github.com/wedrinklatte/cloudlol"
							desc="A Twitter analytics web service hosted on Amazon Web Services (AWS).
							\nThe web interface is designed to handle up to six different types of queries: Semiprime Factorization, Naïve Sentiment Analysis, Retweet relationship examination, Trending hashtag analysis, User popularity comparison and Uploaded photo count, while targeting at ten thousand rps throughput level.
							\nThe extract, transform, load (ETL) processes are conducted on Amazon Elastic MapReduce(EMR) platform. More than one programming model were experimented with the attempt to achieve highest throughput within limited budget. 
							\nModel 1: Amazon Elastic MapReduce + Hive + Sqoop. 
							\nModel 2: Amazon Elastic MapReduce Streaming Program in Python. 
							\nString manipulation, nasty unicode behavior handling and data structures selection are critical to the efficiency of the ETL process.
							"/>
						<WorkItem name="attendance" title="VOICE INTELLIGENT ATTENDANCE SYSTEM" avatar={attendance} fullimg={attendance} category="data mobile network" 
							subtitle="A SPEAKER VERIFICATION BACKED ATTENDANCE TRACKING SYSTEM."
							tools="JAVA, PHP, SQL, PYTHON" year="2015" repo="https://github.com/wedrinklatte/AttendanceSystem"
							desc="An intelligent attendance tracking system that is designed using the client-server architecture and developed based on the philosophy of voice recognition.
							\nThe client side of the system is an Android app capable of audio recording, audio conversion and file uploading. The server side of the system takes charge of audio pre-processing and speaker verification tasks.
							\nSPEAR, a speaker recognition toolkit based on Bob is used in the backend processing.
							"/>
					</ul>
				</div>
			</section>
    );
  }
}

export default Works;
