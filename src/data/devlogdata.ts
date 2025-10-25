// Örnek veri - daha sonra ayrı dosyadan import edebilirsiniz
import finalresults from "../assets/bloggorsel/final-results.png"
import frontendarchitecture from "../assets/bloggorsel/frontend-architecture.png"
import architecturediagram from "../assets/bloggorsel/architecture-diagram.png"
import datapipeline from "../assets/bloggorsel/data-pipeline.png"
import mlopspipeline from "../assets/bloggorsel/mlops-pipeline.png"
import duygufinetune from "../assets/bloggorsel/duygu-finetune.png"
import monolith from "../assets/bloggorsel/monolith.png"
import spark from "../assets/bloggorsel/spark.png"
import mlopskapak from "../assets/bloggorsel/mlopskapak.png"

import type {DevlogContent } from "../types/devlog";


export const devlogData: DevlogContent[] = [
  {
    id: 1,
    title: "ChatAssist'te Duygu Analizi Modelini Fine-tune Etmek",
    date: "25 Ekim 2025",
    author: "Deniz Yılmaz",
    coverImage: duygufinetune,
    content: [
      {
        type: 'paragraph',
        content: "ChatAssist'in müşteri mesajlarını analiz eden modülünü geliştirirken, çok dilli duygu tespiti bizim için en zorlu ama en keyifli bölümlerden biriydi. Bu yazıda, modelimizi nasıl özelleştirdiğimizi ve elde ettiğimiz sonuçları adım adım paylaşacağım."
      },
      {
        type: 'heading',
        level: 2,
        text: "1️⃣ Veri Seti ve Temizlik Süreci",
        className: "text-2xl font-semibold bg-gradient-to-r from-cyan-600 to-rose-500 bg-clip-text text-transparent mt-8 mb-3"
      },
      {
        type: 'paragraph',
        content: "İlk adım olarak, farklı dillerden gelen 50.000 müşteri mesajını etiketledik. Her mesaj 'olumlu', 'nötr' veya 'olumsuz' kategorilerinden birine ait."
      },
      {
        type: 'code',
        language: "python",
        code: `import pandas as pd

df = pd.read_csv("customer_feedback.csv")
df["text"] = df["text"].str.lower().str.replace(r"[^a-zğüşöçıİ0-9 ]", "")
df.dropna(subset=["text", "sentiment"], inplace=True)`
      },
      {
        type: 'heading',
        level: 2,
        text: "2️⃣ Model Mimarisinin Seçilmesi",
        className: "text-2xl font-semibold bg-gradient-to-r from-cyan-600 to-rose-500 bg-clip-text text-transparent mt-8 mb-3"
      },
      {
        type: 'paragraph',
        content: "Multilingual yapıyı desteklediği için BERT-base-multilingual-cased modelini kullandık. Bu model Türkçe, İngilizce, Fransızca ve İspanyolca dahil 104 dili destekliyor."
      },
      {
        type: 'code',
        language: "python",
        code: `from transformers import AutoTokenizer, AutoModelForSequenceClassification

tokenizer = AutoTokenizer.from_pretrained("bert-base-multilingual-cased")
model = AutoModelForSequenceClassification.from_pretrained(
    "bert-base-multilingual-cased",
    num_labels=3
)`
      },
      {
        type: 'heading',
        level: 2,
        text: "3️⃣ Fine-tuning ve Sonuçlar",
        className: "text-2xl font-semibold bg-gradient-to-r from-cyan-600 to-rose-500 bg-clip-text text-transparent mt-8 mb-3"
      },
      {
        type: 'paragraph',
        content: "Modeli 3 epoch boyunca eğittik. Öğrenme oranını 2e-5 olarak tuttuk ve mini-batch boyutu 16 idi. Eğitim sonunda model doğruluğu %91.2'ye ulaştı."
      },
      {
        type: 'table',
        headers: ["Etiket", "Precision", "Recall", "F1 Score"],
        rows: [
          ["Olumlu", "0.93", "0.90", "0.91"],
          ["Olumsuz", "0.89", "0.92", "0.90"],
          ["Nötr", "0.90", "0.91", "0.90"]
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: "🚀 Sonuç ve Gelecek Planları",
        className: "text-2xl font-semibold bg-gradient-to-r from-cyan-600 to-rose-500 bg-clip-text text-transparent mt-8 mb-3"
      },
      {
        type: 'paragraph',
        content: "Fine-tune edilmiş model, ChatAssist'in kullanıcı yanıtlarını daha 'empatik' hale getirmesini sağladı. Gelecekte, duygusal tonlamayı sesli yanıtlar ve avatar mimikleriyle senkronize etmek gibi ek planlarımız var."
      },
      {
        type: 'image',
        src: finalresults,
        alt: "ChatAssist arayüzünde duygu analizi",
        caption: "Şekil 4. ChatAssist arayüzünde duygu analizi çıktısı"
      }
    ]
  },

  {
    id: 2,
    title: "Microservices Mimarisine Geçiş: Monolith'ten Cloud-Native'e Yolculuk",
    date: "15 Kasım 2025",
    author: "Deniz Yılmaz",
    coverImage: monolith,
    content: [
      {
        type: 'paragraph',
        content: "TrendTech bünyesinde geliştirdiğimiz monolith uygulamasını microservices mimarisine taşırken yaşadığımız teknik zorluklar ve çözüm önerilerini bu yazıda paylaşıyorum. Bu dönüşüm, sistem performansımızı 5x artırırken deployment sürelerimizi %70 kısalttı."
      },
      {
        type: 'heading',
        level: 2,
        text: "1️⃣ Monolith'in Sınırları ve Geçiş Kararı",
        className: "text-2xl font-semibold text-blue-400 mt-8 mb-3"
      },
      {
        type: 'paragraph',
        content: "Tek bir kod tabanıyla çalışmanın getirdiği deployment zorlukları ve scaling problemleri, bizi microservices'e geçiş yapmaya zorladı. Özellikle trafik yoğunluğu arttığında tüm sistemin etkilenmesi kabul edilemez bir risk haline gelmişti."
      },
      {
        type: 'code',
        language: "yaml",
        code: `# docker-compose.yml - Eski monolith yapı
version: '3.8'
services:
  monolith-app:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/app
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis`
      },
      {
        type: 'heading',
        level: 2,
        text: "2️⃣ Domain-Driven Design ile Servis Ayrımı",
        className: "text-2xl font-semibold text-blue-400 mt-8 mb-3"
      },
      {
        type: 'paragraph',
        content: "Domain-Driven Design (DDD) prensiplerini kullanarak uygulamamızı 6 ana domaine ayırdık: User Management, Order Processing, Payment, Inventory, Notification ve Analytics. Her domain kendi veritabanına ve business logic'ine sahip oldu."
      },
      {
        type: 'code',
        language: "typescript",
        code: `// Service discovery configuration
const serviceConfig = {
  userService: {
    url: process.env.USER_SERVICE_URL || 'http://user-service:3001',
    timeout: 5000
  },
  orderService: {
    url: process.env.ORDER_SERVICE_URL || 'http://order-service:3002',
    timeout: 8000
  },
  paymentService: {
    url: process.env.PAYMENT_SERVICE_URL || 'http://payment-service:3003',
    timeout: 10000
  }
};`
      },
      {
        type: 'heading',
        level: 2,
        text: "3️⃣ Kubernetes ve Service Mesh Implementasyonu",
        className: "text-2xl font-semibold text-blue-400 mt-8 mb-3"
      },
      {
        type: 'paragraph',
        content: "Kubernetes cluster'ımızı AWS EKS üzerinde kurduk ve Istio service mesh ile servisler arası iletişimi yönettik. Canlı trafikte yapılan A/B testleri sonucunda latency %40 azalırken error rate %85 iyileşti."
      },
      {
        type: 'table',
        headers: ["Metrik", "Monolith", "Microservices", "İyileşme"],
        rows: [
          ["Ortalama Response Time", "450ms", "180ms", "%60"],
          ["Deployment Frequency", "Haftada 1", "Günde 10+", "%900"],
          ["System Uptime", "99.2%", "99.95%", "%0.75"],
          ["Error Rate", "3.2%", "0.5%", "%85"]
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: "🚀 Elde Edilen Kazanımlar ve Öğrenilen Dersler",
        className: "text-2xl font-semibold text-blue-400 mt-8 mb-3"
      },
      {
        type: 'paragraph',
        content: "Microservices mimarisi bize ölçeklenebilirlik ve hız kazandırsa da operasyonel karmaşıklığı artırdı. Distributed tracing, centralized logging ve comprehensive monitoring olmadan bu mimaride başarılı olmak mümkün değil. Bir sonraki hedefimiz serverless computing'e geçiş."
      },
      {
        type: 'image',
        src: architecturediagram,
        alt: "Microservices mimari diyagramı",
        caption: "Şekil 2.1. Nihai microservices mimarimiz ve servis bağımlılıkları"
      }
    ]
  },
  {
    id: 3,
    title: "Real-time Data Processing: Apache Kafka ve Spark Streaming ile Ölçeklenebilir Çözüm",
    date: "5 Aralık 2025",
    author: "Deniz Yılmaz",
    coverImage: spark,
    content: [
      {
        type: 'paragraph',
        content: "IoT Sensor Hub projemiz için saniyede 50.000+ event'i işleyebilen real-time data processing pipeline'ını nasıl tasarladığımızı anlatacağım. Bu sistem sayesinde predictive maintenance doğruluğumuzu %94'e çıkardık."
      },
      {
        type: 'heading',
        level: 2,
        text: "1️⃣ Veri Akışı Mimarisi ve Kafka Topology",
        className: "text-2xl font-semibold text-green-400 mt-8 mb-3"
      },
      {
        type: 'paragraph',
        content: "Sensörlerden gelen ham veriyi Kafka topics'lerine yönlendirdik. Her sensör tipi için ayrı topic'ler oluşturarak veri izolasyonu sağladık. Topic partitioning ile paralel işleme kapasitemizi artırdık."
      },
      {
        type: 'code',
        language: "java",
        code: `// Kafka producer configuration
Properties props = new Properties();
props.put("bootstrap.servers", "kafka-cluster:9092");
props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");
props.put("acks", "all");
props.put("retries", 3);
props.put("batch.size", 16384);
props.put("linger.ms", 10);`
      },
      {
        type: 'heading',
        level: 2,
        text: "2️⃣ Spark Streaming ile Real-time Analytics",
        className: "text-2xl font-semibold text-green-400 mt-8 mb-3"
      },
      {
        type: 'paragraph',
        content: "Spark Structured Streaming kullanarak Kafka'dan gelen verileri 30 saniyelik window'larda işledik. Anomali tespiti, trend analizi ve predictive maintenance modellerini real-time olarak çalıştırdık."
      },
      {
        type: 'code',
        language: "scala",
        code: `val df = spark
  .readStream
  .format("kafka")
  .option("kafka.bootstrap.servers", "kafka-cluster:9092")
  .option("subscribe", "sensor-data")
  .load()

val processedData = df
  .select(from_json($"value", schema).as("data"))
  .withColumn("timestamp", to_timestamp($"data.timestamp"))
  .withWatermark("timestamp", "1 minute")
  .groupBy(
    window($"timestamp", "30 seconds"),
    $"data.sensor_type"
  )
  .agg(avg($"data.temperature").as("avg_temp"))`
      },
      {
        type: 'heading',
        level: 2,
        text: "3️⃣ Performans Optimizasyonu ve Monitoring",
        className: "text-2xl font-semibold text-green-400 mt-8 mb-3"
      },
      {
        type: 'paragraph',
        content: "Cluster resource allocation, memory tuning ve garbage collection optimizasyonları ile sistem performansını maximize ettik. Prometheus ve Grafana ile real-time monitoring dashboard'u oluşturduk."
      },
      {
        type: 'table',
        headers: ["Metrik", "Başlangıç", "Optimize Edilmiş", "İyileşme"],
        rows: [
          ["Event Processing Rate", "25k/s", "52k/s", "%108"],
          ["End-to-End Latency", "2.1s", "0.8s", "%62"],
          ["CPU Usage", "85%", "65%", "%24"],
          ["Memory Usage", "78%", "55%", "%30"]
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: "🚀 Endüstri 4.0'a Hazır Real-time Platform",
        className: "text-2xl font-semibold text-green-400 mt-8 mb-3"
      },
      {
        type: 'paragraph',
        content: "Geliştirdiğimiz real-time data processing pipeline'ı sayesinde müşterilerimiz anlık makine performansı takibi yapabiliyor, predictive maintenance ile plansız duruşları %90 azaltabiliyor. Bir sonraki adımımız edge computing ile daha da dağıtık bir mimariye geçmek."
      },
      {
        type: 'image',
        src: datapipeline,
        alt: "Real-time data processing pipeline mimarisi",
        caption: "Şekil 3.1. End-to-end real-time data processing pipeline'ımız"
      }
    ]
  },
  {
    id: 4,
    title: "React + TypeScript: Enterprise Seviyesinde Frontend Architecture Best Practices",
    date: "20 Ocak 2026",
    author: "Deniz Yılmaz",
    coverImage: frontendarchitecture,
    content: [
      {
        type: 'paragraph',
        content: "Büyük ölçekli React projelerinde karşılaştığımız state management, component organization ve performance sorunlarını nasıl çözdüğümüzü paylaşıyorum. 100.000+ satır koda sahip frontend projemizde uyguladığımız best practices'ler."
      },
      {
        type: 'heading',
        level: 2,
        text: "1️⃣ Atomic Design ve Component Architecture",
        className: "text-2xl font-semibold text-purple-400 mt-8 mb-3"
      },
      {
        type: 'paragraph',
        content: "Atomic Design prensiplerini kullanarak component'larımızı atoms, molecules, organisms ve templates şeklinde kategorize ettik. Bu sayede component reusability'yi maximize ederken technical debt'i minimize ettik."
      },
      {
        type: 'code',
        language: "typescript",
        code: `// Atomic Design structure
src/
├── components/
│   ├── atoms/
│   │   ├── Button/
│   │   ├── Input/
│   │   └── Typography/
│   ├── molecules/
│   │   ├── SearchBar/
│   │   └── UserProfile/
│   ├── organisms/
│   │   ├── Header/
│   │   └── Sidebar/
│   └── templates/
│       ├── Dashboard/
│       └── Auth/
├── hooks/
├── utils/
└── types/`
      },
      {
        type: 'heading',
        level: 2,
        text: "2️⃣ Advanced State Management: Zustand + React Query",
        className: "text-2xl font-semibold text-purple-400 mt-8 mb-3"
      },
      {
        type: 'paragraph',
        content: "Redux'ın karmaşıklığından kurtulup Zustand ile client state'i, React Query ile server state'i yönettik. Bu kombinasyon ile boilerplate kodunu %70 azaltırken developer experience'i önemli ölçüde iyileştirdik."
      },
      {
        type: 'code',
        language: "typescript",
        code: `// Zustand store example
import { create } from 'zustand'

interface AuthState {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: async (email, password) => {
    const user = await authAPI.login(email, password)
    set({ user })
  },
  logout: () => set({ user: null })
}))

// React Query hook
export const useUserData = (userId: string) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
    staleTime: 5 * 60 * 1000 // 5 minutes
  })
}`
      },
      {
        type: 'heading',
        level: 2,
        text: "3️⃣ Performance Optimization ve Bundle Analysis",
        className: "text-2xl font-semibold text-purple-400 mt-8 mb-3"
      },
      {
        type: 'paragraph',
        content: "Code splitting, lazy loading ve memoization teknikleri ile initial bundle size'ı 2.1MB'tan 450KB'a düşürdük. Lighthouse skorlarımızı 65'ten 95'e çıkardık."
      },
      {
        type: 'table',
        headers: ["Performance Metrik", "Optimizasyon Öncesi", "Optimizasyon Sonrası", "İyileşme"],
        rows: [
          ["First Contentful Paint", "3.2s", "1.1s", "%66"],
          ["Largest Contentful Paint", "5.8s", "2.3s", "%60"],
          ["Cumulative Layout Shift", "0.25", "0.05", "%80"],
          ["Bundle Size", "2.1MB", "450KB", "%79"]
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: "🚀 Production Ready Frontend Architecture",
        className: "text-2xl font-semibold text-purple-400 mt-8 mb-3"
      },
      {
        type: 'paragraph',
        content: "Geliştirdiğimiz architecture sayesinde 10+ developer'ın aynı codebase'de sorunsuz çalışabildiği, test coverage'i %85'in üzerinde olan ve kullanıcı deneyimi açısından son derece performanslı bir frontend uygulamasına sahip olduk. Bir sonraki hedefimiz WebAssembly ile daha da performanslı computation'lar yapmak."
      },
      {
        type: 'image',
        src: architecturediagram,
        alt: "Frontend architecture diagram",
        caption: "Şekil 4.1. Enterprise React + TypeScript architecture'mız"
      }
    ]
  },
  {
    id: 5,
    title: "MLOps Pipeline: Machine Learning Modellerini Production'a Taşımak",
    date: "10 Şubat 2026",
    author: "Deniz Yılmaz",
    coverImage: mlopskapak,
    content: [
      {
        type: 'paragraph',
        content: "Machine learning modellerini research'ten production'a taşırken karşılaştığımız zorlukları ve geliştirdiğimiz end-to-end MLOps pipeline'ını anlatıyorum. Bu pipeline sayesinde model deployment süremizi 2 haftadan 2 saate indirdik."
      },
      {
        type: 'heading',
        level: 2,
        text: "1️⃣ End-to-End ML Pipeline: Data to Deployment",
        className: "text-2xl font-semibold text-orange-400 mt-8 mb-3"
      },
      {
        type: 'paragraph',
        content: "MLflow, Kubeflow ve Airflow kullanarak veri toplama, preprocessing, model training, evaluation ve deployment süreçlerini otomatize ettik. Her model version'ı için experiment tracking ve model registry uyguladık."
      },
      {
        type: 'code',
        language: "python",
        code: `import mlflow
import mlflow.sklearn
from sklearn.ensemble import RandomForestClassifier

def train_model(X_train, y_train):
    with mlflow.start_run():
        # Model training
        model = RandomForestClassifier(n_estimators=100)
        model.fit(X_train, y_train)
        
        # Log parameters and metrics
        mlflow.log_param("n_estimators", 100)
        mlflow.log_metric("accuracy", model.score(X_test, y_test))
        
        # Log model
        mlflow.sklearn.log_model(model, "model")
        
        # Register model
        mlflow.register_model("runs:/{run_id}/model", "SentimentModel")`
      },
      {
        type: 'heading',
        level: 2,
        text: "2️⃣ Model Serving ve A/B Testing Infrastructure",
        className: "text-2xl font-semibold text-orange-400 mt-8 mb-3"
      },
      {
        type: 'paragraph',
        content: "KServe (formerly KFServing) kullanarak model serving layer'ını Kubernetes üzerinde kurduk. Canlı trafikte A/B testing yapabilme ve shadow deployment özellikleri ile riski minimize ettik."
      },
      {
        type: 'code',
        language: "yaml",
        code: `apiVersion: serving.kserve.io/v1beta1
kind: InferenceService
metadata:
  name: sentiment-analysis
spec:
  predictor:
    canaryTrafficPercent: 20
    containers:
    - name: kserve-container
      image: registry/sentiment-model:v2
      resources:
        requests:
          memory: "2Gi"
          cpu: "1"
        limits:
          memory: "4Gi"
          cpu: "2"`
      },
      {
        type: 'heading',
        level: 2,
        text: "3️⃣ Model Monitoring ve Data Drift Detection",
        className: "text-2xl font-semibold text-orange-400 mt-8 mb-3"
      },
      {
        type: 'paragraph',
        content: "Production'daki modellerimizi sürekli monitor ederek accuracy decay, data drift ve concept drift'i tespit ediyoruz. Evidently AI kullanarak otomatik retraining trigger'ları oluşturduk."
      },
      {
        type: 'table',
        headers: ["Monitoring Metrik", "Threshold", "Alert Channel", "Action"],
        rows: [
          ["Prediction Accuracy", "< 90%", "Slack + PagerDuty", "Auto-retrain"],
          ["Data Drift Score", "> 0.2", "Email", "Data investigation"],
          ["Inference Latency", "> 500ms", "Slack", "Scale up"],
          ["Feature Drift", "> 0.15", "Dashboard", "Model update"]
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: "🚀 Full Otomasyon ile ML Model Lifecycle",
        className: "text-2xl font-semibold text-orange-400 mt-8 mb-3"
      },
      {
        type: 'paragraph',
        content: "Kurduğumuz MLOps pipeline sayesinde data scientist'ler sadece model geliştirmeye odaklanabiliyor, modeller otomatik olarak production'a taşınıyor ve performansları sürekli monitor ediliyor. Bir sonraki hedefimiz reinforcement learning modelleri için benzer bir pipeline oluşturmak."
      },
      {
        type: 'image',
        src: mlopspipeline,
        alt: "End-to-end MLOps pipeline diagram",
        caption: "Şekil 5.1. Tam otomatik MLOps pipeline'ımız"
      }
    ]
  }
];
