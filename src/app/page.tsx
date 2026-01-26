import react from 'react'

const HomePage: react.FC<any> = (props) => {

  return (
    <div className="min-h-screen bg-base-300 text-base-content font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      {/* <nav className="navbar bg-slate-50/20 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 px-4 md:px-12">
        <div className="navbar-start">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded-lg text-white">
              <Activity size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:block text-base-content">Ostreovision</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium gap-2 text-base-content">
            <li><a href="#about" className="hover:text-primary transition-colors">Overview</a></li>
            <li><a href="#algorithm" className="hover:text-primary transition-colors">ResNet-18</a></li>
            <li><a href="#methodology" className="hover:text-primary transition-colors">Methodology</a></li>
            <li><a href="#team" className="hover:text-primary transition-colors">Team</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary btn-sm rounded-full px-6" href='https://github.com/NitheeshKani/bone-ui'>View Repository</a>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-base-100 pt-16 pb-24 lg:pt-32">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <div className="badge badge-outline badge-primary mb-4 py-3 px-4 font-semibold uppercase tracking-wider text-xs">
              Multi Disiplinary Project
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
              Detecting <span className="text-primary">Osteoporosis</span> with Residual Neural Networks
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Applying the ResNet-18 architecture to analyze digital X-ray imagery for early identification of decreased bone mineral density through computer vision.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#about" className="btn btn-lg btn-primary rounded-xl shadow-lg shadow-base-content">The Abstract</a>
              <a href="#algorithm" className="btn btn-lg btn-outline rounded-xl">Algorithm Deep Dive</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/50 rounded-full blur-3xl opacity-50"></div>
            <div className="relative border border-base-200 bg-base-100 p-4 rounded-3xl shadow-2xl rotate-2">
              <div className="rounded-2xl overflow-hidden bg-slate-900 h-[400px] flex items-center justify-center text-white p-8">
                <div className="text-center w-full">
                  <div className="flex justify-center gap-2 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-12 h-12 border-2 border-blue-500/50 rounded-md flex items-center justify-center font-mono text-[10px] text-blue-400">
                        {i === 2 ? 'X-Ray' : 'Conv'}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-mono text-blue-400 mb-4 tracking-tighter">model.resnet18.forward_pass(input_batch)</p>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-3/4 animate-pulse"></div>
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-slate-500 uppercase">
                      <span>Input Vector</span>
                      <span>Feature Map</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-base-100 p-4 rounded-2xl shadow-xl border border-base-200 max-w-[200px]">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Model Accuracy</p>
                <p className="text-3xl font-black text-primary">94.2%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="about" className="py-24 bg-base-300 border-y border-base-200">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">The Medical Challenge</h2>
            <p className="text-lg text-base-content leading-relaxed">
              Osteoporosis is a systemic skeletal disorder characterized by low bone mass and micro-architectural deterioration.
              Traditional diagnosis relies on Dual-Energy X-ray Absorptiometry (DXA), which can be inaccessible.
              Our research focuses on using standard radiographs and **Deep Residual Learning** to flag at-risk patients during routine clinical visits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-base-100 p-8 border border-primary transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="text-primary mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Microscope size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Feature Extraction</h3>
              <p className="text-primary-content/80">Detecting thinning of the trabecular bone structure and cortical thickness from digital radiographs.</p>
            </div>
            <div className="card bg-base-100 p-8 border border-primary transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="text-primary mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Database size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Dataset Curation</h3>
              <p className="text-primary-content/80">Utilizing a curated repository of 5,000+ labeled medical images for training and validation of the network.</p>
            </div>
            <div className="card bg-base-100 p-8 border border-primary transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="text-primary mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Cpu size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Automated Diagnosis</h3>
              <p className="text-primary-content/80">Reducing the burden on radiologists by providing automated, high-confidence screenings for bone density issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Algorithm Detail */}
      <section id="algorithm" className="py-24 bg-base-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">ResNet-18 Architecture</h2>
              <div className="space-y-6">
                <div className="collapse collapse-plus bg-base-300 border border-slate-200 rounded-2xl">
                  <input type="radio" name="resnet-accordion" defaultChecked />
                  <div className="collapse-title text-xl font-bold">Solving the Degradation Problem</div>
                  <div className="collapse-content text-base-content/80">
                    <p className="mb-4 leading-relaxed">
                      As neural networks become deeper, accuracy tends to saturate and then degrade rapidly.
                      ResNet addresses this by employing <strong>Identity Shortcut Connections</strong>.
                    </p>
                    <div className="bg-slate-900 text-blue-400 p-4 rounded-lg font-mono text-sm shadow-inner">
                      {"Output y = F(x, {Wi}) + x"}
                    </div>
                  </div>
                </div>

                <div className="collapse collapse-plus bg-base-300 border border-slate-200 rounded-2xl">
                  <input type="radio" name="resnet-accordion" />
                  <div className="collapse-title text-xl font-bold">The 18-Layer Configuration</div>
                  <div className="collapse-content text-base-content/80">
                    <p className="leading-relaxed">
                      ResNet-18 is optimized for medical diagnostic tasks where computational efficiency is key.
                      It consists of 17 convolutional layers followed by one fully connected layer, making it faster to train on specific medical subsets than deeper variants like ResNet-101.
                    </p>
                  </div>
                </div>

                <div className="collapse collapse-plus bg-base-300 border border-slate-200 rounded-2xl">
                  <input type="radio" name="resnet-accordion" />
                  <div className="collapse-title text-xl font-bold">Transfer Learning Strategy</div>
                  <div className="collapse-content text-base-content/80">
                    <p className="leading-relaxed">
                      Instead of training from scratch, we use weights pre-trained on ImageNet.
                      The model is fine-tuned using a smaller, high-quality medical dataset to specialize the convolutional filters for bone texture recognition.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                <Layers size={24} /> Layer Topology
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Input Processor', desc: 'Resized 224x224 RGB/Gray' },
                  { name: 'Conv 1', desc: '7x7, 64, stride 2' },
                  { name: 'Max Pool', desc: '3x3, stride 2' },
                  { name: 'Block 1', desc: '2x [3x3, 64]' },
                  { name: 'Block 2', desc: '2x [3x3, 128]' },
                  { name: 'Block 3', desc: '2x [3x3, 256]' },
                  { name: 'Block 4', desc: '2x [3x3, 512]' },
                  { name: 'Avg Pool + FC', desc: 'Softmax Classifier' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-bold text-sm leading-none mb-1 text-slate-100">{item.name}</p>
                      <p className="text-xs text-slate-400 font-mono uppercase tracking-tighter">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Training Methodology</h2>
            <p className="text-blue-400 font-mono text-sm tracking-widest uppercase">From RAW Image to Prediction</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="group p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="text-blue-500 font-mono text-3xl mb-4 opacity-50">01</div>
              <h4 className="font-bold text-xl mb-3">Preprocessing</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Implementation of <strong>CLAHE</strong> for contrast normalization and data augmentation to prevent overfitting.</p>
            </div>
            <div className="group p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="text-blue-500 font-mono text-3xl mb-4 opacity-50">02</div>
              <h4 className="font-bold text-xl mb-3">Optimizer</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Utilization of the <strong>AdamW</strong> optimizer with a learning rate of {"1e-4"} and weight decay.</p>
            </div>
            <div className="group p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="text-blue-500 font-mono text-3xl mb-4 opacity-50">03</div>
              <h4 className="font-bold text-xl mb-3">Validation</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Stratified 5-fold cross-validation to ensure model performance across varied bone shapes.</p>
            </div>
            <div className="group p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="text-blue-500 font-mono text-3xl mb-4 opacity-50">04</div>
              <h4 className="font-bold text-xl mb-3">Visualization</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Integration of <strong>Grad-CAM</strong> to visualize attention maps and justify AI decisions.</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-base-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">The Project Team</h2>
            <p className="text-slate-500">Multi-Disiplinary-Project • Sethu Institute of Technology</p>
          </div>
          <div className="flex flex-wrap justify-center gap-16">
            {[
              { name: "Nitheesh Kani", role: "UI/UX Developer", initial: "NK" },
              { name: "Shri Abirami", role: "UI/UX Developer", initial: "SA" },
              { name: "Janani Shree", role: "Deep Learning Engineer", initial: "JS" },
              { name: "Akash", role: "Data Scientist", initial: "M" },
              { name: "Jeevapandian", role: "Data Scientist", initial: "J" },
              { name: "Abinaya Shree", role: "Deep Learning Engineer", initial: "AS" }
            ].map((member, i) => (
              <div key={i} className="text-center group cursor-default">
                <div className="w-24 h-24 bg-white/60 rounded-3xl flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:-rotate-6 shadow-md border border-slate-200">
                  {member.initial}
                </div>
                <h4 className="font-bold text-xl mb-1">{member.name}</h4>
                <p className="text-sm text-slate-400 uppercase tracking-widest font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-base-300 border-t border-slate-200 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-primary rounded text-white"><Activity size={20} /></div>
                <span className="font-bold text-xl tracking-tighter">OSTEO NET</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                A research project focused on democratizing medical diagnostics through the power of deep learning and computer vision.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h5 className="font-bold text-sm uppercase tracking-widest">Resources</h5>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">ResNet Paper</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Dataset info</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h5 className="font-bold text-sm uppercase tracking-widest">Team</h5>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li><a href="#" className="hover:text-primary transition-colors">Contributions</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
            <p>© 2024 College of Engineering & Technology. Final Year Capstone Project.</p>
            <div className="flex gap-6">
              <span>Status: Final Review</span>
              <span className="text-green-600">● Model Validated</span>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  )
}
const Activity = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
)
const Microscope = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h8" /><path d="M3 22h18" /><path d="M14 22a7 7 0 1 0 0-14h-1" /><path d="M9 14h2" /><path d="M9 12a2 2 0 1 1-2-2V6h6v4.13" /><path d="M12 9s4 2 4 6" /><path d="M12 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
)
const Database = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /></svg>
)
const Cpu = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6v6H9z" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" /></svg>
)
const Layers = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.27a1 1 0 0 0 0 1.83l8.57 4.09a2 2 0 0 0 1.66 0l8.57-4.09a1 1 0 0 0 0-1.83Z" /><path d="m2.6 11.44 8.57 4.09a2 2 0 0 0 1.66 0l8.57-4.09" /><path d="m2.6 15.61 8.57 4.09a2 2 0 0 0 1.66 0l8.57-4.09" /></svg>
)

export default HomePage