const projects = [
  // ウェブ開発
  {
    id: 'portfolio',
    title: 'ポートフォリオサイト',
    description: '自己紹介、プロジェクト紹介',
    techStack: ['React', 'CSS', 'JavaScript'],
    background: 'ポートフォリオを作成するために使用した技術',
    features: ['レスポンシブデザイン', 'プロジェクト紹介ページ'],
    screenshots: ['/images/portfolio-1.png', '/images/portfolio-2.png'],
    demoVideo: '/videos/portfolio-demo.mp4',
    thumbnail: '/images/portfolio.webp'
  },
  {
    id: 'blog',
    title: '個人ブログサイト',
    description: 'シンプルなブログプラットフォーム',
    techStack: ['Next.js', 'Markdown', 'CSS'],
    background: '自分の考えやアイデアを共有するためのブログサイト',
    features: ['Markdownサポート', 'コメント機能'],
    screenshots: ['/images/blog-1.png', '/images/blog-2.png'],
    demoVideo: '/videos/blog-demo.mp4',
    thumbnail: '/images/profile.webp'
  },
  {
    id: 'ecommerce',
    title: 'eコマースサイト',
    description: '商品カタログ、カート、決済機能',
    techStack: ['Shopify', 'React', 'CSS'],
    background: 'オンラインショップを運営するためのプラットフォーム',
    features: ['商品検索', 'カート機能', '決済システム'],
    screenshots: ['/images/ecommerce-1.png', '/images/ecommerce-2.png'],
    demoVideo: '/videos/ecommerce-demo.mp4',
    thumbnail: '/images/ecommerce-thumbnail.webp'
  },
  {
    id: 'recipe',
    title: 'レシピ共有サイト',
    description: 'レシピ投稿、検索、評価',
    techStack: ['React', 'Node.js', 'MongoDB'],
    background: 'ユーザーがレシピを共有し、評価できるプラットフォーム',
    features: ['レシピ投稿機能', 'レシピ検索', 'レシピ評価'],
    screenshots: ['/images/recipe-1.png', '/images/recipe-2.png'],
    demoVideo: '/videos/recipe-demo.mp4',
    thumbnail: '/images/recipe.webp'
  },
  {
    id: 'forum',
    title: 'オンラインフォーラム',
    description: 'ユーザーが投稿できるディスカッションボード',
    techStack: ['PHP', 'MySQL', 'Bootstrap'],
    background: 'ディスカッションボードを提供するプラットフォーム',
    features: ['トピック作成', 'コメント機能', 'ユーザー管理'],
    screenshots: ['/images/forum-1.png', '/images/forum-2.png'],
    demoVideo: '/videos/forum-demo.mp4',
    thumbnail: '/images/forum.webp'
  },
  {
    id: 'task',
    title: 'タスク管理アプリ',
    description: 'タスクの追加、編集、削除、完了管理',
    techStack: ['React', 'Redux', 'CSS'],
    background: '個人やチームでタスクを管理するためのアプリ',
    features: ['タスクの追加', 'タスクの編集', 'タスクの完了管理'],
    screenshots: ['/images/task-1.png', '/images/task-2.png'],
    demoVideo: '/videos/task-demo.mp4',
    thumbnail: '/images/task.webp'
  },
  {
    id: 'travel',
    title: '旅行記共有サイト',
    description: '旅行記の投稿、写真共有',
    techStack: ['React', 'Firebase', 'CSS'],
    background: 'ユーザーが旅行記を共有し、写真をアップロードできるサイト',
    features: ['旅行記投稿', '写真共有', 'コメント機能'],
    screenshots: ['/images/travel-1.png', '/images/travel-2.png'],
    demoVideo: '/videos/travel-demo.mp4',
    thumbnail: '/images/travel.webp'
  },
  {
    id: 'news',
    title: 'ニュースアグリゲーター',
    description: '複数のニュースソースから記事を集める',
    techStack: ['React', 'Node.js', 'RSS'],
    background: '複数のニュースソースから最新の記事を集めるプラットフォーム',
    features: ['ニュースフィード', '記事検索', 'カテゴリ別ニュース'],
    screenshots: ['/images/news-1.png', '/images/news-2.png'],
    demoVideo: '/videos/news-demo.mp4',
    thumbnail: '/images/news.webp'
  },
  {
    id: 'dictionary',
    title: 'オンライン辞書',
    description: '単語の検索、定義表示',
    techStack: ['React', 'Elasticsearch', 'CSS'],
    background: '単語の意味や定義を検索するためのオンライン辞書',
    features: ['単語検索', '定義表示', '関連単語の表示'],
    screenshots: ['/images/dictionary-1.png', '/images/dictionary-2.png'],
    demoVideo: '/videos/dictionary-demo.mp4',
    thumbnail: '/images/dictionary.webp'
  },
  {
    id: 'chat',
    title: 'リアルタイムチャットアプリ',
    description: 'ユーザー間のリアルタイムメッセージ',
    techStack: ['React', 'Firebase', 'CSS'],
    background: 'ユーザー同士がリアルタイムでメッセージを送信できるチャットアプリ',
    features: ['リアルタイムメッセージ', 'ユーザー認証', 'グループチャット'],
    screenshots: ['/images/chat-1.png', '/images/chat-2.png'],
    demoVideo: '/videos/chat-demo.mp4',
    thumbnail: '/images/chat.webp'
  },
  // モバイルアプリ開発
  {
    id: 'health',
    title: '健康管理アプリ',
    description: '食事、運動の記録',
    techStack: ['Flutter', 'Dart', 'Firebase'],
    background: '食事や運動の記録を行い、健康管理をサポートするアプリ',
    features: ['食事記録', '運動ログ', '健康レポート'],
    screenshots: ['/images/health-1.png', '/images/health-2.png'],
    demoVideo: '/videos/health-demo.mp4',
    thumbnail: '/images/health.webp'
  },
  {
    id: 'read',
    title: '読書管理アプリ',
    description: '読書リスト、進捗管理',
    techStack: ['React Native', 'Expo', 'SQLite'],
    background: '読書の進捗を管理し、読んだ本の記録を取るアプリ',
    features: ['読書リスト', '進捗管理', '本の評価'],
    screenshots: ['/images/read-1.png', '/images/read-2.png'],
    demoVideo: '/videos/read-demo.mp4',
    thumbnail: '/images/read.webp'
  },
  {
    id: 'language',
    title: '語学学習アプリ',
    description: '単語帳、クイズ機能',
    techStack: ['Kotlin', 'Firebase', 'XML'],
    background: '語学学習をサポートするためのアプリ',
    features: ['単語帳', 'クイズ', '進捗トラッキング'],
    screenshots: ['/images/language-1.png', '/images/language-2.png'],
    demoVideo: '/videos/language-demo.mp4',
    thumbnail: '/images/language.webp'
  },
  {
    id: 'money',
    title: '家計簿アプリ',
    description: '収支の記録、分析',
    techStack: ['Swift', 'CoreData', 'UIKit'],
    background: '個人の収支を記録し、分析するためのアプリ',
    features: ['収支記録', '支出分析', '予算設定'],
    screenshots: ['/images/money-1.png', '/images/money-2.png'],
    demoVideo: '/videos/money-demo.mp4',
    thumbnail: '/images/money.webp'
  },
  {
    id: 'training',
    title: 'パーソナルトレーナーアプリ',
    description: 'トレーニングプラン作成、記録',
    techStack: ['Flutter', 'Dart', 'Firebase'],
    background: '個人のトレーニングプランを作成し、進捗を管理するアプリ',
    features: ['トレーニングプラン', '進捗記録', '目標設定'],
    screenshots: ['/images/training-1.png', '/images/training-2.png'],
    demoVideo: '/videos/training-demo.mp4',
    thumbnail: '/images/training.webp'
  },
  {
    id: 'weather',
    title: '天気予報アプリ',
    description: '現在の天気、週間予報',
    techStack: ['Java', 'Android SDK', 'OpenWeatherMap API'],
    background: '現在の天気や週間予報を表示するアプリ',
    features: ['現在の天気', '週間予報', '地域検索'],
    screenshots: ['/images/weather-1.png', '/images/weather-2.png'],
    demoVideo: '/videos/weather-demo.mp4',
    thumbnail: '/images/weather.webp'
  },
  {
    id: 'memo',
    title: 'メモ帳アプリ',
    description: 'テキストメモの追加、編集、削除',
    techStack: ['Swift', 'CoreData', 'UIKit'],
    background: '簡単にメモを取るためのアプリ',
    features: ['メモ追加', 'メモ編集', 'メモ削除'],
    screenshots: ['/images/memo-1.png', '/images/memo-2.png'],
    demoVideo: '/videos/memo-demo.mp4',
    thumbnail: '/images/memo.webp'
  },
  {
    id: 'med',
    title: '瞑想ガイドアプリ',
    description: '瞑想セッションのガイド',
    techStack: ['React Native', 'Expo', 'Redux'],
    background: 'ユーザーが瞑想を行う際のガイドを提供するアプリ',
    features: ['瞑想セッション', 'タイマー', 'リマインダー'],
    screenshots: ['/images/med-1.png', '/images/med-2.png'],
    demoVideo: '/videos/med-demo.mp4',
    thumbnail: '/images/med.webp'
  },
  {
    id: 'shop',
    title: 'ショッピングリストアプリ',
    description: '買い物リストの作成、管理',
    techStack: ['Kotlin', 'Firebase', 'XML'],
    background: '買い物リストを作成し、管理するためのアプリ',
    features: ['リスト作成', 'アイテム追加', 'リスト共有'],
    screenshots: ['/images/shop-1.png', '/images/shop-2.png'],
    demoVideo: '/videos/shop-demo.mp4',
    thumbnail: '/images/shop.webp'
  },
  {
    id: 'fitness',
    title: 'フィットネストラッカー',
    description: '歩数計、運動ログ',
    techStack: ['Java', 'Android SDK', 'Google Fit API'],
    background: '日々の運動や歩数を記録するためのアプリ',
    features: ['歩数計', '運動ログ', 'カロリー計算'],
    screenshots: ['/images/fitness-1.png', '/images/fitness-2.png'],
    demoVideo: '/videos/fitness-demo.mp4',
    thumbnail: '/images/fitness.webp'
  },
  // ゲーム開発
  {
    id: '2dgame',
    title: '2Dプラットフォーマーゲーム',
    description: 'ジャンプ、ランアクション',
    techStack: ['Unity', 'C#', 'Photoshop'],
    background: '2Dのプラットフォーマーゲームを作成するプロジェクト',
    features: ['ジャンプアクション', 'レベルデザイン', '敵キャラクター'],
    screenshots: ['/images/2dgame-1.png', '/images/2dgame-2.png'],
    demoVideo: '/videos/2dgame-demo.mp4',
    thumbnail: '/images/2dgame.webp'
  },
  {
    id: 'puzzle',
    title: 'パズルゲーム',
    description: 'ロジックパズル、ブロックパズル',
    techStack: ['Unity', 'C#', 'Blender'],
    background: 'パズルを解くことを目的としたゲーム',
    features: ['ブロックパズル', 'ロジックパズル', '複数レベル'],
    screenshots: ['/images/puzzle-1.png', '/images/puzzle-2.png'],
    demoVideo: '/videos/puzzle-demo.mp4',
    thumbnail: '/images/puzzle.webp'
  },
  {
    id: 'rpg',
    title: 'RPGゲーム',
    description: 'キャラクター育成、ストーリー進行',
    techStack: ['Unity', 'C#', 'Maya'],
    background: 'キャラクターを育成し、ストーリーを進行させるゲーム',
    features: ['キャラクター育成', 'ストーリー', 'バトルシステム'],
    screenshots: ['/images/rpg-1.png', '/images/rpg-2.png'],
    demoVideo: '/videos/rpg-demo.mp4',
    thumbnail: '/images/rpg.webp'
  },
  {
    id: 'card',
    title: 'カードゲーム',
    description: 'トランプ、戦略カードゲーム',
    techStack: ['Unity', 'C#', 'Photoshop'],
    background: '戦略的なカードゲームを作成するプロジェクト',
    features: ['カードデザイン', '戦略要素', 'マルチプレイヤー'],
    screenshots: ['/images/card-1.png', '/images/card-2.png'],
    demoVideo: '/videos/card-demo.mp4',
    thumbnail: '/images/card.webp'
  },
  {
    id: 'adventure',
    title: 'アドベンチャーゲーム',
    description: '探索、謎解き',
    techStack: ['Unity', 'C#', 'Blender'],
    background: '探索や謎解きをメインとしたアドベンチャーゲーム',
    features: ['探索要素', '謎解き', 'ストーリー'],
    screenshots: ['/images/adventure-1.png', '/images/adventure-2.png'],
    demoVideo: '/videos/adventure-demo.mp4',
    thumbnail: '/images/adventure.webp'
  },
  {
    id: 'shooting',
    title: 'シューティングゲーム',
    description: '敵を撃つアクション',
    techStack: ['Unity', 'C#', 'Maya'],
    background: '敵を撃つアクションをメインとしたシューティングゲーム',
    features: ['シューティングメカニクス', '敵キャラクター', '複数ステージ'],
    screenshots: ['/images/shooting-1.png', '/images/shooting-2.png'],
    demoVideo: '/videos/shooting-demo.mp4',
    thumbnail: '/images/shooting.webp'
  },
  {
    id: 'simulation',
    title: 'シミュレーションゲーム',
    description: '都市建設、農場経営',
    techStack: ['Unity', 'C#', 'Blender'],
    background: '都市建設や農場経営をシミュレートするゲーム',
    features: ['都市建設', '資源管理', '経営シミュレーション'],
    screenshots: ['/images/simulation-1.png', '/images/simulation-2.png'],
    demoVideo: '/videos/simulation-demo.mp4',
    thumbnail: '/images/simulation.webp'
  },
  {
    id: 'sports',
    title: 'スポーツゲーム',
    description: 'サッカー、バスケットボール',
    techStack: ['Unity', 'C#', 'Blender'],
    background: 'スポーツをテーマにしたゲーム',
    features: ['サッカー', 'バスケットボール', 'マルチプレイヤー'],
    screenshots: ['/images/sports-1.png', '/images/sports-2.png'],
    demoVideo: '/videos/sports-demo.mp4',
    thumbnail: '/images/sports.webp'
  },
  {
    id: 'education',
    title: '教育ゲーム',
    description: '学習を促進するミニゲーム',
    techStack: ['Unity', 'C#', 'Photoshop'],
    background: '学習を促進するための教育ゲーム',
    features: ['数学ゲーム', '言語学習', '歴史クイズ'],
    screenshots: ['/images/education-1.png', '/images/education-2.png'],
    demoVideo: '/videos/education-demo.mp4',
    thumbnail: '/images/education.webp'
  },
  {
    id: 'boardgame',
    title: 'ボードゲーム',
    description: 'チェス、オセロ',
    techStack: ['Unity', 'C#', 'Blender'],
    background: 'クラシックなボードゲームをデジタルで再現',
    features: ['チェス', 'オセロ', 'マルチプレイヤー'],
    screenshots: ['/images/boardgame-1.png', '/images/boardgame-2.png'],
    demoVideo: '/videos/boardgame-demo.mp4',
    thumbnail: '/images/boardgame.webp'
  },
  // データサイエンス
  {
    id: 'dataana',
    title: 'データ分析プロジェクト',
    description: 'データのクレンジング、分析、可視化',
    techStack: ['Python', 'Pandas', 'Matplotlib'],
    background: 'データのクレンジング、分析、可視化を行うプロジェクト',
    features: ['データクリーニング', 'データ分析', 'データ可視化'],
    screenshots: ['/images/dataana-1.png', '/images/dataana-2.png'],
    demoVideo: '/videos/dataana-demo.mp4',
    thumbnail: '/images/dataana.webp'
  },
  {
    id: 'machinelearning',
    title: '機械学習モデル',
    description: '予測モデルの構築、評価',
    techStack: ['Python', 'Scikit-learn', 'TensorFlow'],
    background: '機械学習モデルを構築し、評価するプロジェクト',
    features: ['モデル構築', 'モデル評価', 'ハイパーパラメータチューニング'],
    screenshots: ['/images/machinelearning-1.png', '/images/machinelearning-2.png'],
    demoVideo: '/videos/machinelearning-demo.mp4',
    thumbnail: '/images/machine-learning.webp'
  },
  {
    id: 'nlp',
    title: '自然言語処理',
    description: 'テキスト分類、感情分析',
    techStack: ['Python', 'NLTK', 'SpaCy'],
    background: '自然言語処理技術を用いてテキストデータを分析するプロジェクト',
    features: ['テキスト分類', '感情分析', 'トピックモデリング'],
    screenshots: ['/images/nlp-1.png', '/images/nlp-2.png'],
    demoVideo: '/videos/nlp-demo.mp4',
    thumbnail: '/images/language-process.webp'
  },
  {
    id: 'imagerecognition',
    title: '画像認識プロジェクト',
    description: '画像分類、物体検出',
    techStack: ['Python', 'TensorFlow', 'OpenCV'],
    background: '画像認識技術を用いて画像データを分析するプロジェクト',
    features: ['画像分類', '物体検出', '画像前処理'],
    screenshots: ['/images/imagerecognition-1.png', '/images/imagerecognition-2.png'],
    demoVideo: '/videos/imagerecognition-demo.mp4',
    thumbnail: '/images/image-recognition.webp'
  },
  {
    id: 'bigdata',
    title: 'ビッグデータプロジェクト',
    description: 'Hadoop、Sparkを使用した分析',
    techStack: ['Hadoop', 'Spark', 'Scala'],
    background: 'ビッグデータ技術を用いて大量のデータを分析するプロジェクト',
    features: ['データ収集', 'データ処理', '分散コンピューティング'],
    screenshots: ['/images/bigdata-1.png', '/images/bigdata-2.png'],
    demoVideo: '/videos/bigdata-demo.mp4',
    thumbnail: '/images/bigdata.webp'
  },
  {
    id: 'dataviz',
    title: 'データ可視化ダッシュボード',
    description: 'インタラクティブなグラフ',
    techStack: ['JavaScript', 'D3.js', 'React'],
    background: 'データをインタラクティブなグラフとして可視化するダッシュボード',
    features: ['インタラクティブグラフ', 'データフィルタリング', 'ダッシュボード'],
    screenshots: ['/images/dataviz-1.png', '/images/dataviz-2.png'],
    demoVideo: '/videos/dataviz-demo.mp4',
    thumbnail: '/images/data-visualization.webp'
  },
  {
    id: 'timeseries',
    title: '時間シリーズ分析',
    description: '予測、季節調整',
    techStack: ['Python', 'Statsmodels', 'Pandas'],
    background: '時間系列データを分析し、予測するプロジェクト',
    features: ['時間系列予測', '季節調整', 'トレンド分析'],
    screenshots: ['/images/timeseries-1.png', '/images/timeseries-2.png'],
    demoVideo: '/videos/timeseries-demo.mp4',
    thumbnail: '/images/時間シリーズ分析.webp'
  },
  {
    id: 'recommendation',
    title: 'レコメンデーションシステム',
    description: '商品推薦アルゴリズム',
    techStack: ['Python', 'Scikit-learn', 'Surprise'],
    background: 'ユーザーの嗜好に基づいて商品を推薦するシステムを構築するプロジェクト',
    features: ['協調フィルタリング', 'コンテンツベース推薦', '評価システム'],
    screenshots: ['/images/recommendation-1.png', '/images/recommendation-2.png'],
    demoVideo: '/videos/recommendation-demo.mp4',
    thumbnail: '/images/レコメンデーションシステム.webp'
  },
  {
    id: 'clustering',
    title: 'クラスタリング分析',
    description: '類似データのグループ化',
    techStack: ['Python', 'Scikit-learn', 'Matplotlib'],
    background: 'データをクラスタリングし、類似したデータをグループ化するプロジェクト',
    features: ['K-meansクラスタリング', '階層クラスタリング', '可視化'],
    screenshots: ['/images/clustering-1.png', '/images/clustering-2.png'],
    demoVideo: '/videos/clustering-demo.mp4',
    thumbnail: '/images/クラスタリング分析.webp'
  },
  {
    id: 'anomaly',
    title: 'アノマリーディテクション',
    description: '異常値検出',
    techStack: ['Python', 'Scikit-learn', 'TensorFlow'],
    background: '異常値を検出し、データの異常を分析するプロジェクト',
    features: ['異常検出アルゴリズム', '時系列データの異常検出', '可視化'],
    screenshots: ['/images/anomaly-1.png', '/images/anomaly-2.png'],
    demoVideo: '/videos/anomaly-demo.mp4',
    thumbnail: '/images/アノマリーディテクション.webp'
  },
  // 自動化とスクリプティング
  {
    id: 'filemgmt',
    title: 'ファイル管理スクリプト',
    description: '自動ファイル整理、バックアップ',
    techStack: ['Python', 'Bash', 'PowerShell'],
    background: 'ファイルを自動で整理し、バックアップを行うスクリプト',
    features: ['自動ファイル整理', '定期バックアップ', 'エラーログ'],
    screenshots: ['/images/filemgmt-1.png', '/images/filemgmt-2.png'],
    demoVideo: '/videos/filemgmt-demo.mp4',
    thumbnail: '/images/ファイル管理スクリプト.webp'
  },
  {
    id: 'scraping',
    title: 'データスクレイピングツール',
    description: 'ウェブからデータ収集',
    techStack: ['Python', 'BeautifulSoup', 'Scrapy'],
    background: 'ウェブサイトからデータを自動で収集するツール',
    features: ['データ収集', 'データクレンジング', 'CSVエクスポート'],
    screenshots: ['/images/scraping-1.png', '/images/scraping-2.png'],
    demoVideo: '/videos/scraping-demo.mp4',
    thumbnail: '/images/データスクレイピングツール.webp'
  },
  {
    id: 'email',
    title: 'メール送信スクリプト',
    description: '定期的なメール送信',
    techStack: ['Python', 'SMTP', 'Google Sheets API'],
    background: '定期的にメールを送信するスクリプト',
    features: ['メール送信', 'Google Sheets連携', 'ログ管理'],
    screenshots: ['/images/email-1.png', '/images/email-2.png'],
    demoVideo: '/videos/email-demo.mp4',
    thumbnail: '/images/メール送信スクリプト.webp'
  },
  {
    id: 'scheduler',
    title: 'タスクスケジューラ',
    description: '定期的なタスクの自動実行',
    techStack: ['Python', 'Celery', 'Redis'],
    background: '定期的にタスクを自動実行するためのスケジューラ',
    features: ['タスクスケジューリング', 'タスク管理', 'エラーハンドリング'],
    screenshots: ['/images/scheduler-1.png', '/images/scheduler-2.png'],
    demoVideo: '/videos/scheduler-demo.mp4',
    thumbnail: '/images/タスクスケジューラ.webp'
  },
  {
    id: 'apiintegration',
    title: 'API統合スクリプト',
    description: '他のサービスとの連携',
    techStack: ['Python', 'Requests', 'JSON'],
    background: '他のサービスのAPIと連携するスクリプト',
    features: ['APIリクエスト', 'データ処理', '結果の保存'],
    screenshots: ['/images/apiintegration-1.png', '/images/apiintegration-2.png'],
    demoVideo: '/videos/apiintegration-demo.mp4',
    thumbnail: '/images/API統合スクリプト.webp'
  },
  {
    id: 'dataconversion',
    title: 'データ変換スクリプト',
    description: 'CSV、JSONの変換',
    techStack: ['Python', 'Pandas', 'CSV'],
    background: 'データを異なる形式に変換するスクリプト',
    features: ['CSVからJSONへの変換', 'データクレンジング', 'ログ管理'],
    screenshots: ['/images/dataconversion-1.png', '/images/dataconversion-2.png'],
    demoVideo: '/videos/dataconversion-demo.mp4',
    thumbnail: '/images/データ変換スクリプト.webp'
  },
  {
    id: 'imageprocessing',
    title: '画像処理スクリプト',
    description: '画像リサイズ、フィルタ適用',
    techStack: ['Python', 'OpenCV', 'PIL'],
    background: '画像を自動で処理するスクリプト',
    features: ['画像リサイズ', 'フィルタ適用', 'バッチ処理'],
    screenshots: ['/images/imageprocessing-1.png', '/images/imageprocessing-2.png'],
    demoVideo: '/videos/imageprocessing-demo.mp4',
    thumbnail: '/images/画像処理スクリプト.webp'
  },
  {
    id: 'loganalysis',
    title: 'ログ解析スクリプト',
    description: 'ログデータの解析',
    techStack: ['Python', 'Pandas', 'Matplotlib'],
    background: 'ログデータを解析し、レポートを生成するスクリプト',
    features: ['ログ解析', 'レポート生成', 'エラーハンドリング'],
    screenshots: ['/images/loganalysis-1.png', '/images/loganalysis-2.png'],
    demoVideo: '/videos/loganalysis-demo.mp4',
    thumbnail: '/images/ログ解析スクリプト.webp'
  },
  {
    id: 'testautomation',
    title: 'テスト自動化スクリプト',
    description: '自動テスト実行',
    techStack: ['Python', 'Selenium', 'unittest'],
    background: 'テストを自動で実行し、結果を報告するスクリプト',
    features: ['テスト自動化', '結果レポート', 'エラーハンドリング'],
    screenshots: ['/images/testautomation-1.png', '/images/testautomation-2.png'],
    demoVideo: '/videos/testautomation-demo.mp4',
    thumbnail: '/images/テスト自動化スクリプト.webp'
  },
  {
    id: 'socialbot',
    title: 'ソーシャルメディアボット',
    description: '自動投稿、データ収集',
    techStack: ['Python', 'Tweepy', 'Facebook SDK'],
    background: 'ソーシャルメディアに自動で投稿し、データを収集するボット',
    features: ['自動投稿', 'データ収集', 'エラーハンドリング'],
    screenshots: ['/images/socialbot-1.png', '/images/socialbot-2.png'],
    demoVideo: '/videos/socialbot-demo.mp4',
    thumbnail: '/images/ソーシャルメディアボット.webp'
  },
  // フロントエンド開発
  {
    id: 'reactapp',
    title: 'Reactアプリケーション',
    description: 'シングルページアプリケーション',
    techStack: ['React', 'Redux', 'CSS'],
    background: 'Reactを使用してシングルページアプリケーションを作成するプロジェクト',
    features: ['コンポーネントベース', 'ステート管理', 'レスポンシブデザイン'],
    screenshots: ['/images/reactapp-1.png', '/images/reactapp-2.png'],
    demoVideo: '/videos/reactapp-demo.mp4',
    thumbnail: '/images/Reactアプリケーション.png'
  },
  {
    id: 'vueproject',
    title: 'Vue.jsプロジェクト',
    description: 'インタラクティブなウェブアプリ',
    techStack: ['Vue.js', 'Vuex', 'Vuetify'],
    background: 'Vue.jsを使用してインタラクティブなウェブアプリケーションを作成するプロジェクト',
    features: ['コンポーネントベース', 'リアクティブデータバインディング', 'レスポンシブデザイン'],
    screenshots: ['/images/vueproject-1.png', '/images/vueproject-2.png'],
    demoVideo: '/videos/vueproject-demo.mp4',
    thumbnail: '/images/Vue.jsプロジェクト.png'
  },
  {
    id: 'angularapp',
    title: 'Angularアプリ',
    description: '複雑なデータバインディング',
    techStack: ['Angular', 'TypeScript', 'SCSS'],
    background: 'Angularを使用して複雑なデータバインディングを行うアプリケーションを作成するプロジェクト',
    features: ['双方向データバインディング', 'コンポーネントベース', 'レスポンシブデザイン'],
    screenshots: ['/images/angularapp-1.png', '/images/angularapp-2.png'],
    demoVideo: '/videos/angularapp-demo.mp4',
    thumbnail: '/images/Angularアプリ.png'
  },
  {
    id: 'responsive',
    title: 'レスポンシブデザイン',
    description: 'モバイルフレンドリーなレイアウト',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    background: 'レスポンシブデザインを採用したモバイルフレンドリーなウェブページを作成するプロジェクト',
    features: ['フレキシブルグリッド', 'メディアクエリ', 'モバイルファーストデザイン'],
    screenshots: ['/images/responsive-1.png', '/images/responsive-2.png'],
    demoVideo: '/videos/responsive-demo.mp4',
    thumbnail: '/images/レスポンシブデザイン.webp'
  },
  {
    id: 'staticsite',
    title: '静的サイト生成',
    description: 'GatsbyやNext.jsを使用',
    techStack: ['Gatsby', 'Next.js', 'Markdown'],
    background: '静的サイトジェネレーターを使用して高速なウェブサイトを作成するプロジェクト',
    features: ['静的コンテンツ', '高速ロード', 'SEO最適化'],
    screenshots: ['/images/staticsite-1.png', '/images/staticsite-2.png'],
    demoVideo: '/videos/staticsite-demo.mp4',
    thumbnail: '/images/静的サイト生成.webp'
  },
  {
    id: 'map',
    title: 'インタラクティブ地図',
    description: 'LeafletやMapboxを使用',
    techStack: ['Leaflet', 'Mapbox', 'JavaScript'],
    background: 'インタラクティブな地図を作成するプロジェクト',
    features: ['地図表示', 'マーカー', 'カスタムレイヤー'],
    screenshots: ['/images/map-1.png', '/images/map-2.png'],
    demoVideo: '/videos/map-demo.mp4',
    thumbnail: '/images/インタラクティブ地図.webp'
  },
  {
    id: 'formvalidation',
    title: 'フォームバリデーション',
    description: 'ユーザー入力の検証',
    techStack: ['React', 'Formik', 'Yup'],
    background: 'ユーザー入力を検証するフォームを作成するプロジェクト',
    features: ['入力検証', 'エラーメッセージ表示', 'リアルタイムバリデーション'],
    screenshots: ['/images/formvalidation-1.png', '/images/formvalidation-2.png'],
    demoVideo: '/videos/formvalidation-demo.mp4',
    thumbnail: '/images/フォームバリデーション.webp'
  },
  {
    id: 'realtimefeed',
    title: 'リアルタイムフィード',
    description: 'WebSocketを使用',
    techStack: ['React', 'Socket.IO', 'Node.js'],
    background: 'リアルタイムでデータを更新するフィードを作成するプロジェクト',
    features: ['リアルタイムデータ', 'プッシュ通知', 'ユーザーコメント'],
    screenshots: ['/images/realtimefeed-1.png', '/images/realtimefeed-2.png'],
    demoVideo: '/videos/realtimefeed-demo.mp4',
    thumbnail: '/images/リアルタイムフィード.webp'
  },
  {
    id: 'animation',
    title: 'アニメーションとトランジション',
    description: 'CSS、JavaScriptを活用',
    techStack: ['CSS', 'JavaScript', 'GreenSock'],
    background: 'ウェブページにアニメーションやトランジションを追加するプロジェクト',
    features: ['アニメーション', 'トランジション', 'ユーザーインタラクション'],
    screenshots: ['/images/animation-1.png', '/images/animation-2.png'],
    demoVideo: '/videos/animation-demo.mp4',
    thumbnail: '/images/アニメーションとトランジション.webp'
  },
  {
    id: 'accessibility',
    title: 'アクセシビリティ対応',
    description: 'ユーザビリティを考慮したデザイン',
    techStack: ['HTML', 'ARIA', 'CSS'],
    background: 'アクセシビリティを考慮したウェブサイトを作成するプロジェクト',
    features: ['スクリーンリーダー対応', 'キーボードナビゲーション', 'カラコントラスト'],
    screenshots: ['/images/accessibility-1.png', '/images/accessibility-2.png'],
    demoVideo: '/videos/accessibility-demo.mp4',
    thumbnail: '/images/アクセシビリティ対応.webp'
  },
  // バックエンド開発
  {
    id: 'restapi',
    title: 'RESTful API',
    description: 'CRUD操作が可能なAPI',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    background: 'RESTfulアーキテクチャに基づいてAPIを作成するプロジェクト',
    features: ['CRUD操作', '認証', 'エラーハンドリング'],
    screenshots: ['/images/restapi-1.png', '/images/restapi-2.png'],
    demoVideo: '/videos/restapi-demo.mp4',
    thumbnail: '/images/RESTful API.webp'
  },
  {
    id: 'graphql',
    title: 'GraphQL API',
    description: '柔軟なクエリ言語を使用したAPI',
    techStack: ['Node.js', 'GraphQL', 'Apollo'],
    background: 'GraphQLを使用して柔軟なデータ取得を可能にするAPIを作成するプロジェクト',
    features: ['データフェッチ', 'リアルタイム更新', 'スキーマ定義'],
    screenshots: ['/images/graphql-1.png', '/images/graphql-2.png'],
    demoVideo: '/videos/graphql-demo.mp4',
    thumbnail: '/images/GraphQL API.webp'
  },
  {
    id: 'auth',
    title: '認証システム',
    description: 'ユーザーログイン、認証',
    techStack: ['Node.js', 'Express', 'JWT'],
    background: 'ユーザーのログインや認証を管理するシステムを作成するプロジェクト',
    features: ['ユーザー登録', 'ログイン', 'トークン認証'],
    screenshots: ['/images/auth-1.png', '/images/auth-2.png'],
    demoVideo: '/videos/auth-demo.mp4',
    thumbnail: '/images/認証システム.webp'
  },
  {
    id: 'crudapp',
    title: 'CRUDアプリケーション',
    description: 'データベース操作',
    techStack: ['Node.js', 'Express', 'MySQL'],
    background: 'CRUD操作を行うための基本的なアプリケーションを作成するプロジェクト',
    features: ['データ作成', 'データ読み取り', 'データ更新', 'データ削除'],
    screenshots: ['/images/crudapp-1.png', '/images/crudapp-2.png'],
    demoVideo: '/videos/crudapp-demo.mp4',
    thumbnail: '/images/CRUDアプリケーション.webp'
  },
  {
    id: 'websocket',
    title: 'WebSocketアプリ',
    description: 'リアルタイム通信',
    techStack: ['Node.js', 'Socket.IO', 'Express'],
    background: 'リアルタイム通信を可能にするWebSocketアプリを作成するプロジェクト',
    features: ['リアルタイム通信', 'チャット機能', 'プッシュ通知'],
    screenshots: ['/images/websocket-1.png', '/images/websocket-2.png'],
    demoVideo: '/videos/websocket-demo.mp4',
    thumbnail: '/images/WebSocketアプリ.webp'
  },
  {
    id: 'jobscheduler',
    title: 'ジョブスケジューラ',
    description: 'バッチ処理、定期タスク',
    techStack: ['Node.js', 'Agenda', 'MongoDB'],
    background: '定期的なタスクをスケジュールして実行するためのジョブスケジューラを作成するプロジェクト',
    features: ['ジョブスケジューリング', 'タスク管理', 'ログ記録'],
    screenshots: ['/images/jobscheduler-1.png', '/images/jobscheduler-2.png'],
    demoVideo: '/videos/jobscheduler-demo.mp4',
    thumbnail: '/images/ジョブスケジューラ.webp'
  },
  {
    id: 'emailservice',
    title: 'メール送信サービス',
    description: 'メール通知システム',
    techStack: ['Node.js', 'Nodemailer', 'Express'],
    background: 'メール通知を送信するためのサービスを作成するプロジェクト',
    features: ['メール送信', 'テンプレートエンジン', 'エラーハンドリング'],
    screenshots: ['/images/emailservice-1.png', '/images/emailservice-2.png'],
    demoVideo: '/videos/emailservice-demo.mp4',
    thumbnail: '/images/メール送信サービス.webp'
  },
  {
    id: 'fileupload',
    title: 'ファイルアップロードサービス',
    description: 'ファイル管理',
    techStack: ['Node.js', 'Multer', 'Express'],
    background: 'ユーザーがファイルをアップロードし、管理するためのサービスを作成するプロジェクト',
    features: ['ファイルアップロード', 'ファイルストレージ', 'ファイル管理'],
    screenshots: ['/images/fileupload-1.png', '/images/fileupload-2.png'],
    demoVideo: '/videos/fileupload-demo.mp4',
    thumbnail: '/images/ファイルアップロードサービス.webp'
  },
  {
    id: 'security',
    title: 'セキュリティ実装',
    description: 'データ暗号化、セキュリティ対策',
    techStack: ['Node.js', 'bcrypt', 'jsonwebtoken'],
    background: 'アプリケーションのセキュリティを強化するための実装を行うプロジェクト',
    features: ['データ暗号化', 'ユーザー認証', 'アクセス制御'],
    screenshots: ['/images/security-1.png', '/images/security-2.png'],
    demoVideo: '/videos/security-demo.mp4',
    thumbnail: '/images/セキュリティ実装.webp'
  },
  {
    id: 'deployment',
    title: 'デプロイメントスクリプト',
    description: '継続的インテグレーション/デリバリー',
    techStack: ['Node.js', 'Jenkins', 'Docker'],
    background: 'アプリケーションを自動的にデプロイするためのスクリプトを作成するプロジェクト',
    features: ['自動デプロイ', 'CI/CDパイプライン', 'バージョン管理'],
    screenshots: ['/images/deployment-1.png', '/images/deployment-2.png'],
    demoVideo: '/videos/deployment-demo.mp4',
    thumbnail: '/images/デプロイメントスクリプト.webp'
  },
  // クラウドコンピューティング
  {
    id: 'ec2',
    title: 'AWS EC2デプロイ',
    description: 'ウェブアプリケーションのデプロイ',
    techStack: ['AWS EC2', 'Linux', 'Nginx'],
    background: 'AWS EC2を使用してウェブアプリケーションをデプロイするプロジェクト',
    features: ['EC2インスタンス設定', 'ウェブサーバー設定', '自動スケーリング'],
    screenshots: ['/images/ec2-1.png', '/images/ec2-2.png'],
    demoVideo: '/videos/ec2-demo.mp4',
    thumbnail: '/images/AWS EC2デプロイ.png'
  },
  {
    id: 's3',
    title: 'AWS S3ストレージ',
    description: 'ファイルストレージソリューション',
    techStack: ['AWS S3', 'Node.js', 'Express'],
    background: 'AWS S3を使用してファイルをストレージするソリューションを作成するプロジェクト',
    features: ['ファイルアップロード', 'ファイル管理', 'アクセス制御'],
    screenshots: ['/images/s3-1.png', '/images/s3-2.png'],
    demoVideo: '/videos/s3-demo.mp4',
    thumbnail: '/images/AWS S3ストレージ.png'
  },
  {
    id: 'lambda',
    title: 'AWS Lambda',
    description: 'イベント駆動の関数実行',
    techStack: ['AWS Lambda', 'Node.js', 'API Gateway'],
    background: 'AWS Lambdaを使用してイベント駆動の関数を実行するプロジェクト',
    features: ['サーバーレス', 'イベント駆動', 'スケーラビリティ'],
    screenshots: ['/images/lambda-1.png', '/images/lambda-2.png'],
    demoVideo: '/videos/lambda-demo.mp4',
    thumbnail: '/images/AWS Lambda.png'
  },
  {
    id: 'azure',
    title: 'Azure Web App',
    description: 'アプリケーションのホスティング',
    techStack: ['Azure', 'Node.js', 'Express'],
    background: 'Azureを使用してウェブアプリケーションをホスティングするプロジェクト',
    features: ['Azure設定', 'ホスティング', 'スケーラビリティ'],
    screenshots: ['/images/azure-1.png', '/images/azure-2.png'],
    demoVideo: '/videos/azure-demo.mp4',
    thumbnail: '/images/Azure Web App.png'
  },
  {
    id: 'cloudfunctions',
    title: 'Google Cloud Functions',
    description: 'サーバーレスアーキテクチャ',
    techStack: ['Google Cloud Functions', 'Node.js', 'Firebase'],
    background: 'Google Cloud Functionsを使用してサーバーレスアーキテクチャを構築するプロジェクト',
    features: ['サーバーレス', 'イベント駆動', 'スケーラビリティ'],
    screenshots: ['/images/cloudfunctions-1.png', '/images/cloudfunctions-2.png'],
    demoVideo: '/videos/cloudfunctions-demo.mp4',
    thumbnail: '/images/Google Cloud Functions.png'
  },
  {
    id: 'docker',
    title: 'コンテナ化',
    description: 'Dockerを使用したアプリケーション',
    techStack: ['Docker', 'Kubernetes', 'Node.js'],
    background: 'Dockerを使用してアプリケーションをコンテナ化するプロジェクト',
    features: ['コンテナ化', 'デプロイ', 'スケーラビリティ'],
    screenshots: ['/images/docker-1.png', '/images/docker-2.png'],
    demoVideo: '/videos/docker-demo.mp4',
    thumbnail: '/images/コンテナ化.png'
  },
  {
    id: 'kubernetes',
    title: 'Kubernetesオーケストレーション',
    description: 'コンテナ管理',
    techStack: ['Kubernetes', 'Docker', 'Node.js'],
    background: 'Kubernetesを使用してコンテナを管理するプロジェクト',
    features: ['オーケストレーション', 'スケーラビリティ', 'モニタリング'],
    screenshots: ['/images/kubernetes-1.png', '/images/kubernetes-2.png'],
    demoVideo: '/videos/kubernetes-demo.mp4',
    thumbnail: '/images/Kubernetesオーケストレーション.png'
  },
  {
    id: 'cicd',
    title: 'CI/CDパイプライン',
    description: '継続的インテグレーション/デリバリー',
    techStack: ['Jenkins', 'Docker', 'Git'],
    background: '継続的インテグレーションとデリバリーを実現するためのCI/CDパイプラインを構築するプロジェクト',
    features: ['自動ビルド', '自動テスト', '自動デプロイ'],
    screenshots: ['/images/cicd-1.png', '/images/cicd-2.png'],
    demoVideo: '/videos/cicd-demo.mp4',
    thumbnail: '/images/CICDパイプライン.webp'
  },
  {
    id: 'terraform',
    title: 'Terraformによるインフラストラクチャコード化',
    description: 'インフラ管理',
    techStack: ['Terraform', 'AWS', 'Azure'],
    background: 'Terraformを使用してインフラをコード化し、管理するプロジェクト',
    features: ['インフラ自動化', 'コード化', 'バージョン管理'],
    screenshots: ['/images/terraform-1.png', '/images/terraform-2.png'],
    demoVideo: '/videos/terraform-demo.mp4',
    thumbnail: '/images/Terraformによるインフラストラクチャコード化.png'
  },
  {
    id: 'microservices',
    title: 'マイクロサービスアーキテクチャ',
    description: '分散システムの構築',
    techStack: ['Node.js', 'Docker', 'Kubernetes'],
    background: 'マイクロサービスアーキテクチャを使用して分散システムを構築するプロジェクト',
    features: ['サービス分割', 'スケーラビリティ', 'モニタリング'],
    screenshots: ['/images/microservices-1.png', '/images/microservices-2.png'],
    demoVideo: '/videos/microservices-demo.mp4',
    thumbnail: '/images/マイクロサービスアーキテクチャ.webp'
  },
  // データベース管理
  {
    id: 'dbdesign',
    title: 'データベース設計',
    description: '正規化、ER図作成',
    techStack: ['MySQL', 'ERDPlus', 'SQL'],
    background: 'データベースを設計し、正規化を行うプロジェクト',
    features: ['ER図作成', '正規化', 'データベース設計'],
    screenshots: ['/images/dbdesign-1.png', '/images/dbdesign-2.png'],
    demoVideo: '/videos/dbdesign-demo.mp4',
    thumbnail: '/images/データベース設計.webp'
  },
  {
    id: 'sqlopt',
    title: 'SQLクエリ最適化',
    description: 'パフォーマンス向上',
    techStack: ['MySQL', 'Explain', 'SQL'],
    background: 'SQLクエリのパフォーマンスを最適化するプロジェクト',
    features: ['クエリ最適化', 'インデックス作成', 'パフォーマンスモニタリング'],
    screenshots: ['/images/sqlopt-1.png', '/images/sqlopt-2.png'],
    demoVideo: '/videos/sqlopt-demo.mp4',
    thumbnail: '/images/SQLクエリ最適化.webp'
  },
  {
    id: 'dbmigration',
    title: 'データベースマイグレーション',
    description: 'スキーマ変更',
    techStack: ['MySQL', 'Flyway', 'SQL'],
    background: 'データベーススキーマを変更するためのマイグレーションプロジェクト',
    features: ['スキーマ変更', 'データ移行', 'バージョン管理'],
    screenshots: ['/images/dbmigration-1.png', '/images/dbmigration-2.png'],
    demoVideo: '/videos/dbmigration-demo.mp4',
    thumbnail: '/images/データベースマイグレーション.webp'
  },
  {
    id: 'backup',
    title: 'バックアップとリカバリ',
    description: 'データ保護戦略',
    techStack: ['MySQL', 'Bash', 'Cron'],
    background: 'データベースのバックアップとリカバリを行うプロジェクト',
    features: ['自動バックアップ', 'リカバリ手順', 'データ保護'],
    screenshots: ['/images/backup-1.png', '/images/backup-2.png'],
    demoVideo: '/videos/backup-demo.mp4',
    thumbnail: '/images/バックアップとリカバリ.webp'
  },
  {
    id: 'indexdesign',
    title: 'インデックス設計',
    description: 'クエリ速度改善',
    techStack: ['MySQL', 'Explain', 'SQL'],
    background: 'データベースクエリの速度を改善するためのインデックスを設計するプロジェクト',
    features: ['インデックス作成', 'パフォーマンスモニタリング', 'クエリ最適化'],
    screenshots: ['/images/indexdesign-1.png', '/images/indexdesign-2.png'],
    demoVideo: '/videos/indexdesign-demo.mp4',
    thumbnail: '/images/インデックス設計.webp'
  },
  {
    id: 'rdbms',
    title: 'リレーショナルデータベース管理',
    description: 'MySQL、PostgreSQL',
    techStack: ['MySQL', 'PostgreSQL', 'SQL'],
    background: 'リレーショナルデータベースを管理するプロジェクト',
    features: ['データベース管理', 'ユーザー管理', 'バックアップとリカバリ'],
    screenshots: ['/images/rdbms-1.png', '/images/rdbms-2.png'],
    demoVideo: '/videos/rdbms-demo.mp4',
    thumbnail: '/images/リレーショナルデータベース管理.webp'
  },
  {
    id: 'nosql',
    title: 'NoSQLデータベース',
    description: 'MongoDB、Cassandra',
    techStack: ['MongoDB', 'Cassandra', 'NoSQL'],
    background: 'NoSQLデータベースを管理するプロジェクト',
    features: ['スキーマレスデザイン', '分散データベース', 'パフォーマンスモニタリング'],
    screenshots: ['/images/nosql-1.png', '/images/nosql-2.png'],
    demoVideo: '/videos/nosql-demo.mp4',
    thumbnail: '/images/NoSQLデータベース.webp'
  },
  {
    id: 'dwh',
    title: 'データウェアハウス',
    description: 'OLAP、ビジネスインテリジェンス',
    techStack: ['Snowflake', 'Redshift', 'SQL'],
    background: 'データウェアハウスを構築し、ビジネスインテリジェンスを提供するプロジェクト',
    features: ['データモデリング', 'ETLプロセス', 'レポート作成'],
    screenshots: ['/images/dwh-1.png', '/images/dwh-2.png'],
    demoVideo: '/videos/dwh-demo.mp4',
    thumbnail: '/images/データウェアハウス.webp'
  },
  {
    id: 'realtime',
    title: 'リアルタイムデータ処理',
    description: 'Kafka、Redis',
    techStack: ['Kafka', 'Redis', 'Java'],
    background: 'リアルタイムでデータを処理するシステムを構築するプロジェクト',
    features: ['データストリーミング', 'リアルタイム分析', 'スケーラビリティ'],
    screenshots: ['/images/realtime-1.png', '/images/realtime-2.png'],
    demoVideo: '/videos/realtime-demo.mp4',
    thumbnail: '/images/リアルタイムデータ処理.webp'
  },
  {
    id: 'integration',
    title: 'データ統合',
    description: 'ETLプロセスの実装',
    techStack: ['Apache Nifi', 'Python', 'SQL'],
    background: '異なるデータソースを統合するためのETLプロセスを実装するプロジェクト',
    features: ['データ抽出', 'データ変換', 'データロード'],
    screenshots: ['/images/integration-1.png', '/images/integration-2.png'],
    demoVideo: '/videos/integration-demo.mp4',
    thumbnail: '/images/データ統合.webp'
  }
];

export default projects;
