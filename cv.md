Sang Nguyen - Senior AI Engineer
+84382343496 • tsdocode@gmail.com • https://www.linkedin.com/in/tsdocode/
Summary
Senior AI Engineer specializing in speech synthesis (TTS) and real-time voice agent systems. Experienced in
training and optimizing speech processing pipelines, building large-scale speech datasets, and deploying
low-latency speech systems.
Skills & Interests
Languages: English, Vietnamese
ML / Speech: TTS, ASR, Transformers
Frameworks: PyTorch, Hugging Face Transformers
Inference: Triton Server, TensorRT, CUDA Graphs, vLLM, Ray
Infra: Docker, Kubernetes, GCP
Interests: Conversational AI, Speech Systems, MLOps
Experience
Trusting Social Vietnam
Senior ML Engineer 2024 – 2026
●
Trained and fine-tuned TTS models (VITS, F5-TTS, CosyV oice, KANI-TTS) for Vietnamese speech
synthesis
●
Built and curated a 20k-hour Vietnamese wild speech dataset, including data crawling, filtering,
alignment, and quality control for TTS training
●
Designed end-to-end audio preprocessing pipelines (denoise, diarization, ASR filtering,
normalization) for robust TTS training
●
Developed internal TTS evaluation framework, benchmarking models using perceptual and objective
metrics (e.g., MOS, latency, stability)
●
Improved synthesis quality beyond public TTS baselines through model and data improvements,
validated via internal evaluation and user feedback
●
Optimized inference using TensorRT and CUDA Graphs, reducing latency by 2x and increasing
throughput by 4x on Nvidia L4 GPU
●
Deployed scalable speech systems using Triton Server, supporting real-time voice applications
Neto AI Remote
AI Engineer 2025 – 2026
●
●
Integrated real-time speech-to-speech pipeline into an existing voice agent system
Optimized TTS inference to serve large-scale models (~1B parameters) in real-time, supporting 12
concurrent users in production
●
●
Integrated ASR models to improve transcription quality and robustness
Conducted applied research to improve system latency and synthesis quality in production voice AI
systems
KMS Technology Vietnam
Senior AI Engineer 2021 – 2024
●
Led a team of 6 AI engineers to design and deploy end-to-end ML systems (data → training →
production)
●
●
●
Built and deployed an internal chatbot system used by 1,000+ employees across the organization
Designed MLOps pipelines including data processing, model training, deployment, and monitoring
Improved model performance through optimization of latency and accuracy across multiple ML systems
Opensource contributions
nano-qwen3tts-vllm (Author)
https://github.com/tsdocode/nano-qwen3tts-vllm
●
Achieved ~3× latency speedup and up to 16× throughput improvement via efficient batching and KV
●
cache optimization
Focused on real-time TTS serving performance for large-scale deployment
Hugging Face – nanoVLM
https://github.com/huggingface/nanoVLM/pull/88
●
●
Improved inference performance using torch.compile and static KV cache, achieving ~3× speedup
Optimized model execution for lower latency and higher throughput
Hugging Face – Parler-TTS
https://github.com/huggingface/parler-tts/pull/87
https://github.com/huggingface/parler-tts/pull/59
●
●
Contributed to TTS model improvements and debugging, enhancing model usability and stability
Added Flash Attention 2 + torch.compile to model inference
nari-labs – Dia-TTS
https://github.com/nari-labs/dia/pull/163
https://github.com/nari-labs/dia/pull/229
●
Contributed to speech model improvements and issue resolution, focusing on inference pipeline
reliability