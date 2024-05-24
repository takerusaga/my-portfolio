const categories = [
    {
      title: 'ウェブ開発',
      projects: [
        { id: 'portfolio', title: 'ポートフォリオサイト', description: '自己紹介、プロジェクト紹介', thumbnail: '/images/portfolio.webp' },
        { id: 'blog', title: '個人ブログサイト', description: 'シンプルなブログプラットフォーム', thumbnail: '/images/profile.webp' },
        { id: 'ecommerce', title: 'eコマースサイト', description: '商品カタログ、カート、決済機能', thumbnail: '/images/ecommerce-thumbnail.webp' },
        { id: 'recipe', title: 'レシピ共有サイト', description: 'レシピ投稿、検索、評価', thumbnail: '/images/recipi.webp' },
        { id: 'forum', title: 'オンラインフォーラム', description: 'ユーザーが投稿できるディスカッションボード', thumbnail: '/images/forum.webp' },
        { id: 'task', title: 'タスク管理アプリ', description: 'タスクの追加、編集、削除、完了管理', thumbnail: '/images/task.webp' },
        { id: 'travel', title: '旅行記共有サイト', description: '旅行記の投稿、写真共有', thumbnail: '/images/travel.webp' },
        { id: 'news', title: 'ニュースアグリゲーター', description: '複数のニュースソースから記事を集める', thumbnail: '/images/news.webp' },
        { id: 'dictionary', title: 'オンライン辞書', description: '単語の検索、定義表示', thumbnail: '/images/dictionary.webp' },
        { id: 'chat', title: 'リアルタイムチャットアプリ', description: 'ユーザー間のリアルタイムメッセージ', thumbnail: '/images/chat.webp' },
      ]
    },
    {
      title: 'モバイルアプリ開発',
      projects: [
        { id: 'health', title: '健康管理アプリ', description: '食事、運動の記録', thumbnail: '/images/health.webp' },
        { id: 'read', title: '読書管理アプリ', description: '読書リスト、進捗管理', thumbnail: '/images/read.webp' },
        { id: 'language', title: '語学学習アプリ', description: '単語帳、クイズ機能', thumbnail: '/images/language.webp' },
        { id: 'money', title: '家計簿アプリ', description: '収支の記録、分析', thumbnail: '/images/money.webp' },
        { id: 'training', title: 'パーソナルトレーナーアプリ', description: 'トレーニングプラン作成、記録', thumbnail: '/images/training.webp' },
        { id: 'weather', title: '天気予報アプリ', description: '現在の天気、週間予報', thumbnail: '/images/weather.webp' },
        { id: 'memo', title: 'メモ帳アプリ', description: 'テキストメモの追加、編集、削除', thumbnail: '/images/memo.webp' },
        { id: 'med', title: '瞑想ガイドアプリ', description: '瞑想セッションのガイド', thumbnail: '/images/med.webp' },
        { id: 'shop', title: 'ショッピングリストアプリ', description: '買い物リストの作成、管理', thumbnail: '/images/shop.webp' },
        { id: 'fitness', title: 'フィットネストラッカー', description: '歩数計、運動ログ', thumbnail: '/images/fitness.webp' },
      ]
    },
    {
      title: 'ゲーム開発',
      projects: [
        { id: '2dgame', title: '2Dプラットフォーマーゲーム', description: 'ジャンプ、ランアクション', thumbnail: '/images/2dgame.webp' },
        { id: 'puzzle', title: 'パズルゲーム', description: 'ロジックパズル、ブロックパズル', thumbnail: '/images/puzzle.webp' },
        { id: 'rpg', title: 'RPGゲーム', description: 'キャラクター育成、ストーリー進行', thumbnail: '/images/rpg.webp' },
        { id: 'card', title: 'カードゲーム', description: 'トランプ、戦略カードゲーム', thumbnail: '/images/card.webp' },
        { id: 'adventure', title: 'アドベンチャーゲーム', description: '探索、謎解き', thumbnail: '/images/adventure.webp' },
        { id: 'shooting', title: 'シューティングゲーム', description: '敵を撃つアクション', thumbnail: '/images/shooting.webp' },
        { id: 'simulation', title: 'シミュレーションゲーム', description: '都市建設、農場経営', thumbnail: '/images/simulation.webp' },
        { id: 'sports', title: 'スポーツゲーム', description: 'サッカー、バスケットボール', thumbnail: '/images/sports.webp' },
        { id: 'education', title: '教育ゲーム', description: '学習を促進するミニゲーム', thumbnail: '/images/education.webp' },
        { id: 'boardgame', title: 'ボードゲーム', description: 'チェス、オセロ', thumbnail: '/images/boardgame.webp' },
      ]
    },
    {
      title: 'データサイエンス',
      projects: [
        { id: 'dataana', title: 'データ分析プロジェクト', description: 'データのクレンジング、分析、可視化', thumbnail: '/images/dataana.webp' },
        { id: 'machinelearning', title: '機械学習モデル', description: '予測モデルの構築、評価', thumbnail: '/images/machine-learning.webp' },
        { id: 'nlp', title: '自然言語処理', description: 'テキスト分類、感情分析', thumbnail: '/images/language-process.webp' },
        { id: 'imagerecognition', title: '画像認識プロジェクト', description: '画像分類、物体検出', thumbnail: '/images/image-recognition.webp' },
        { id: 'bigdata', title: 'ビッグデータプロジェクト', description: 'Hadoop、Sparkを使用した分析', thumbnail: '/images/bigdata.webp' },
        { id: 'dataviz', title: 'データ可視化ダッシュボード', description: 'インタラクティブなグラフ', thumbnail: '/images/data-visualization.webp' },
        { id: 'timeseries', title: '時間シリーズ分析', description: '予測、季節調整', thumbnail: '/images/時間シリーズ分析.webp' },
        { id: 'recommendation', title: 'レコメンデーションシステム', description: '商品推薦アルゴリズム', thumbnail: '/images/レコメンデーションシステム.webp' },
        { id: 'clustering', title: 'クラスタリング分析', description: '類似データのグループ化', thumbnail: '/images/クラスタリング分析.webp' },
        { id: 'anomaly', title: 'アノマリーディテクション', description: '異常値検出', thumbnail: '/images/アノマリーディテクション.webp' },
      ]
    },
    {
      title: '自動化とスクリプティング',
      projects: [
        { id: 'filemgmt', title: 'ファイル管理スクリプト', description: '自動ファイル整理、バックアップ', thumbnail: '/images/ファイル管理スクリプト.webp' },
        { id: 'scraping', title: 'データスクレイピングツール', description: 'ウェブからデータ収集', thumbnail: '/images/データスクレイピングツール.webp' },
        { id: 'email', title: 'メール送信スクリプト', description: '定期的なメール送信', thumbnail: '/images/メール送信スクリプト.webp' },
        { id: 'scheduler', title: 'タスクスケジューラ', description: '定期的なタスクの自動実行', thumbnail: '/images/タスクスケジューラ.webp' },
        { id: 'apiintegration', title: 'API統合スクリプト', description: '他のサービスとの連携', thumbnail: '/images/API統合スクリプト.webp' },
        { id: 'dataconversion', title: 'データ変換スクリプト', description: 'CSV、JSONの変換', thumbnail: '/images/データ変換スクリプト.webp' },
        { id: 'imageprocessing', title: '画像処理スクリプト', description: '画像リサイズ、フィルタ適用', thumbnail: '/images/画像処理スクリプト.webp' },
        { id: 'loganalysis', title: 'ログ解析スクリプト', description: 'ログデータの解析', thumbnail: '/images/ログ解析スクリプト.webp' },
        { id: 'testautomation', title: 'テスト自動化スクリプト', description: '自動テスト実行', thumbnail: '/images/テスト自動化スクリプト.webp' },
        { id: 'socialbot', title: 'ソーシャルメディアボット', description: '自動投稿、データ収集', thumbnail: '/images/ソーシャルメディアボット.webp' },
      ]
    },
    {
      title: 'フロントエンド開発',
      projects: [
        { id: 'reactapp', title: 'Reactアプリケーション', description: 'シングルページアプリケーション', thumbnail: '/images/Reactアプリケーション.png' },
        { id: 'vueproject', title: 'Vue.jsプロジェクト', description: 'インタラクティブなウェブアプリ', thumbnail: '/images/Vue.jsプロジェクト.png' },
        { id: 'angularapp', title: 'Angularアプリ', description: '複雑なデータバインディング', thumbnail: '/images/Angularアプリ.png' },
        { id: 'responsive', title: 'レスポンシブデザイン', description: 'モバイルフレンドリーなレイアウト', thumbnail: '/images/レスポンシブデザイン.webp' },
        { id: 'staticsite', title: '静的サイト生成', description: 'GatsbyやNext.jsを使用', thumbnail: '/images/静的サイト生成.webp' },
        { id: 'map', title: 'インタラクティブ地図', description: 'LeafletやMapboxを使用', thumbnail: '/images/インタラクティブ地図.webp' },
        { id: 'formvalidation', title: 'フォームバリデーション', description: 'ユーザー入力の検証', thumbnail: '/images/フォームバリデーション.webp' },
        { id: 'realtimefeed', title: 'リアルタイムフィード', description: 'WebSocketを使用', thumbnail: '/images/リアルタイムフィード.webp' },
        { id: 'animation', title: 'アニメーションとトランジション', description: 'CSS、JavaScriptを活用', thumbnail: '/images/アニメーションとトランジション.webp' },
        { id: 'accessibility', title: 'アクセシビリティ対応', description: 'ユーザビリティを考慮したデザイン', thumbnail: '/images/アクセシビリティ対応.webp' },
      ]
    },
    {
      title: 'バックエンド開発',
      projects: [
        { id: 'restapi', title: 'RESTful API', description: 'CRUD操作が可能なAPI', thumbnail: '/images/RESTful API.webp' },
        { id: 'graphql', title: 'GraphQL API', description: '柔軟なクエリ言語を使用したAPI', thumbnail: '/images/GraphQL API.webp' },
        { id: 'auth', title: '認証システム', description: 'ユーザーログイン、認証', thumbnail: '/images/認証システム.webp' },
        { id: 'crudapp', title: 'CRUDアプリケーション', description: 'データベース操作', thumbnail: '/images/CRUDアプリケーション.webp' },
        { id: 'websocket', title: 'WebSocketアプリ', description: 'リアルタイム通信', thumbnail: '/images/WebSocketアプリ.webp' },
        { id: 'jobscheduler', title: 'ジョブスケジューラ', description: 'バッチ処理、定期タスク', thumbnail: '/images/ジョブスケジューラ.webp' },
        { id: 'emailservice', title: 'メール送信サービス', description: 'メール通知システム', thumbnail: '/images/メール送信サービス.webp' },
        { id: 'fileupload', title: 'ファイルアップロードサービス', description: 'ファイル管理', thumbnail: '/images/ファイルアップロードサービス.webp' },
        { id: 'security', title: 'セキュリティ実装', description: 'データ暗号化、セキュリティ対策', thumbnail: '/images/セキュリティ実装.webp' },
        { id: 'deployment', title: 'デプロイメントスクリプト', description: '継続的インテグレーション/デリバリー', thumbnail: '/images/デプロイメントスクリプト.webp' },
      ]
    },
    {
      title: 'クラウドコンピューティング',
      projects: [
        { id: 'ec2', title: 'AWS EC2デプロイ', description: 'ウェブアプリケーションのデプロイ', thumbnail: '/images/AWS EC2デプロイ.png' },
        { id: 's3', title: 'AWS S3ストレージ', description: 'ファイルストレージソリューション', thumbnail: '/images/AWS S3ストレージ.png' },
        { id: 'lambda', title: 'AWS Lambda', description: 'イベント駆動の関数実行', thumbnail: '/images/AWS Lambda.png' },
        { id: 'azure', title: 'Azure Web App', description: 'アプリケーションのホスティング', thumbnail: '/images/Azure Web App.png' },
        { id: 'cloudfunctions', title: 'Google Cloud Functions', description: 'サーバーレスアーキテクチャ', thumbnail: '/images/Google Cloud Functions.png' },
        { id: 'docker', title: 'コンテナ化', description: 'Dockerを使用したアプリケーション', thumbnail: '/images/コンテナ化.png' },
        { id: 'kubernetes', title: 'Kubernetesオーケストレーション', description: 'コンテナ管理', thumbnail: '/images/Kubernetesオーケストレーション.png' },
        { id: 'cicd', title: 'CI/CDパイプライン', description: '継続的インテグレーション/デリバリー', thumbnail: '/images/CICDパイプライン.webp' },
        { id: 'terraform', title: 'Terraformによるインフラストラクチャコード化', description: 'インフラ管理', thumbnail: '/images/Terraformによるインフラストラクチャコード化.png' },
        { id: 'microservices', title: 'マイクロサービスアーキテクチャ', description: '分散システムの構築', thumbnail: '/images/マイクロサービスアーキテクチャ.webp' },
      ]
    },
    {
      title: 'データベース管理',
      projects: [
        { id: 'dbdesign', title: 'データベース設計', description: '正規化、ER図作成', thumbnail: '/images/データベース設計.webp' },
        { id: 'sqlopt', title: 'SQLクエリ最適化', description: 'パフォーマンス向上', thumbnail: '/images/SQLクエリ最適化.webp' },
        { id: 'dbmigration', title: 'データベースマイグレーション', description: 'スキーマ変更', thumbnail: '/images/データベースマイグレーション.webp' },
        { id: 'backup', title: 'バックアップとリカバリ', description: 'データ保護戦略', thumbnail: '/images/バックアップとリカバリ.webp' },
        { id: 'indexdesign', title: 'インデックス設計', description: 'クエリ速度改善', thumbnail: '/images/インデックス設計.webp' },
        { id: 'rdbms', title: 'リレーショナルデータベース管理', description: 'MySQL、PostgreSQL', thumbnail: '/images/リレーショナルデータベース管理.webp' },
        { id: 'nosql', title: 'NoSQLデータベース', description: 'MongoDB、Cassandra', thumbnail: '/images/NoSQLデータベース.webp' },
        { id: 'dwh', title: 'データウェアハウス', description: 'OLAP、ビジネスインテリジェンス', thumbnail: '/images/データウェアハウス.webp' },
        { id: 'realtime', title: 'リアルタイムデータ処理', description: 'Kafka、Redis', thumbnail: '/images/リアルタイムデータ処理.webp' },
        { id: 'integration', title: 'データ統合', description: 'ETLプロセスの実装', thumbnail: '/images/データ統合.webp' },
      ]
    },
  ];


export default categories;
