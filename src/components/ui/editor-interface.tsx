'use client'

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"

export function editorInterface() {
  const isIDEMaximized = false




  return (
    <>
      <AnimatePresence>
        {isIDEMaximized && (
          <motion.main
            initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotateX: -90 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              originX: animationOrigin.x / window.innerWidth,
              originY: animationOrigin.y / window.innerHeight,
            }}
            className={cn(
              "fixed inset-0 bg-[#141416] text-gray-100 font-inter transition-all duration-300 z-50",
              isIDEMaximized ? "m-0" : "m-4"
            )}
          >
            <div className="h-full border border-[#18181b] rounded-lg overflow-hidden flex flex-col">
              <header className="bg-[#18181b] p-2 flex items-center justify-between border-b border-[#2c2c30]">
                <div className="w-20"></div>
                <div className="flex-grow max-w-2xl mx-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      placeholder={activeContent === 'projects' ? "Search projects..." : "Search experience..."}
                      className="w-full bg-[#141416] rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#2c2c30]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button onClick={handleMinimize} className="p-1 hover:bg-[#1c1c1f] rounded">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 6H10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                  </button>
                  <button onClick={handleMaximize} className="p-1 hover:bg-[#1c1c1f] rounded">
                    {isIDEMaximized ? (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="2.5" y="2.5" width="7" height="7" stroke="currentColor" strokeWidth="1" />
                        <path d="M4.5 4.5V1.5H10.5V7.5H7.5" stroke="currentColor" strokeWidth="1" />
                      </svg>
                    ) : (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="8" height="8" stroke="currentColor" strokeWidth="1" />
                      </svg>
                    )}
                  </button>
                  <button onClick={handleClose} className="p-1 hover:bg-[#1c1c1f] rounded">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 3L9 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                      <path d="M9 3L3 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </header>
              <div className="flex-grow flex overflow-hidden">
                {activeContent === 'projects' && (
                  <>
                    <nav className="w-64 flex-shrink-0 bg-[#18181b] overflow-y-auto flex flex-col border-r border-[#2c2c30]">
                      <div className="p-4">
                        <span className="text-sm font-medium">Files</span>
                      </div>
                      <div className="flex-grow overflow-y-auto">
                        {Object.entries(filteredProjects).map(([year, yearProjects]) => (
                          <div key={year}>
                            <div
                              className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#1c1c1f]"
                              onClick={() => toggleFolder(year)}
                            >
                              {openFolders.includes(year) ? (
                                <ChevronDown size={18} className="mr-2" />
                              ) : (
                                <ChevronRight size={18} className="mr-2" />
                              )}
                              <Folder size={18} className="mr-2 text-[#3c3c40]" />
                              <span>{year}</span>
                            </div>
                            {openFolders.includes(year) && (
                              <div className="ml-4">
                                {yearProjects.map(project => (
                                  <div key={project.name}>
                                    <div
                                      className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#1c1c1f]"
                                      onClick={() => toggleFolder(`${year}/${project.name}`)}
                                    >
                                      {openFolders.includes(`${year}/${project.name}`) ? (
                                        <ChevronDown size={18} className="mr-2" />
                                      ) : (
                                        <ChevronRight size={18} className="mr-2" />
                                      )}
                                      <Folder size={18} className="mr-2  text-[#4c4c50]" />
                                      <span>{project.name}</span>
                                    </div>
                                    {openFolders.includes(`${year}/${project.name}`) && (
                                      <div
                                        className={cn(
                                          "flex items-center px-4 py-2 cursor-pointer hover:bg-[#1c1c1f] ml-8",
                                          selectedFile === `${year}/${project.name}/README.md` && "bg-[#2c2c30]"
                                        )}
                                        onClick={() => selectFile(year, project.name)}
                                      >
                                        <File size={18} className="mr-2 text-gray-400" />
                                        <span>README.md</span>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </nav>
                    <section className="flex-grow overflow-hidden flex flex-col">
                      <div className="bg-[#18181b] px-4 py-2 flex items-center border-b border-[#2c2c30]">
                        <div className="flex items-center space-x-2 text-sm">
                          <Home size={16} />
                          <span>/</span>
                          {selectedFile?.split('/').map((part, index, array) => (
                            <React.Fragment key={index}>
                              <span className={cn("hover:text-[#3c3c40] cursor-pointer", {
                                "text-[#3c3c40]": index === array.length - 1
                              })}>
                                {part}
                              </span>
                              {index < array.length - 1 && <span>/</span>}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                      <div className="flex-grow overflow-y-auto p-4">
                        {selectedFile ? (
                          renderReadme(projects[selectedFile.split('/')[0]].find(p => p.name === selectedFile.split('/')[1]))
                        ) : (
                          <div className="text-center text-gray-500 mt-20">
                            Select a project to view its README
                          </div>
                        )}
                      </div>
                    </section>
                  </>
                )}
                {activeContent === 'experience' && (
                  <section className="flex-grow overflow-y-auto p-4">
                    {renderExperience()}
                  </section>
                )}
              </div>
              <footer className="bg-[#18181b] p-2 flex items-center justify-center space-x-4 border-t border-[#2c2c30]">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <button onClick={() => console.log('Open email client')} className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </button>
              </footer>
            </div>
          </motion.main>
        )}
      </AnimatePresence>

      {/* desktop icons */}
      {isIDEMinimized && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="flex space-x-8">
            <div
              className="w-24 h-24 bg-[#18181b] border border-[#2c2c30] rounded-lg shadow-lg cursor-pointer hover:bg-[#1c1c1f] transition-all duration-300 flex flex-col items-center justify-center"
              onClick={() => handleReopen('projects')}
            >
              <Folder size={48} className="text-[#3c3c40] mb-2" />
              <span className="text-xs text-gray-400">Projects</span>
            </div>
            <div
              className="w-24 h-24 bg-[#18181b] border border-[#2c2c30] rounded-lg shadow-lg cursor-pointer hover:bg-[#1c1c1f] transition-all duration-300 flex flex-col items-center justify-center"
              onClick={() => handleReopen('experience')}
            >
              <Briefcase size={48} className="text-[#3c3c40] mb-2" />
              <span className="text-xs text-gray-400">Experience</span>
            </div>
          </div>
        </div>
      )}
      {zoomedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={`/placeholder.svg?height=600&width=800`}
              alt="Zoomed project image"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
