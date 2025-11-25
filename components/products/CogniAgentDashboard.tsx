'use client'

import React from 'react'
import { motion } from 'framer-motion'

const CogniAgentDashboard = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="relative bg-gray-800/90 rounded-2xl shadow-2xl p-8 border border-yellow-400/20">
        {/* CogniForge Manufacturing Dashboard */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center text-black">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-white">Agent Orchestrator</div>
                <div className="text-sm text-gray-300">Multi-agent coordination</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-400 font-medium">Active</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-400/10 rounded-lg p-4 text-center border border-gray-400/20">
              <div className="text-2xl font-bold text-yellow-400">24</div>
              <div className="text-xs text-yellow-300">Active Agents</div>
            </div>
            <div className="bg-gray-400/10 rounded-lg p-4 text-center border border-gray-400/20">
              <div className="text-2xl font-bold text-yellow-400">95%</div>
              <div className="text-xs text-yellow-300">Automation Rate</div>
            </div>
            <div className="bg-gray-400/10 rounded-lg p-4 text-center border border-gray-400/20">
              <div className="text-2xl font-bold text-yellow-400">1.2k</div>
              <div className="text-xs text-yellow-300">Tasks/Hour</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg border border-orange-400/10">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-white">Customer Service Agent</span>
              </div>
              <span className="text-xs text-yellow-400 font-medium">Processing</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg border border-yellow-400/10">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-white">Data Analysis Agent</span>
              </div>
              <span className="text-xs text-yellow-400 font-medium">Analyzing</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg border border-yellow-400/10">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-white">Workflow Orchestrator</span>
              </div>
              <span className="text-xs text-yellow-400 font-medium">Coordinating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-300 rounded-full animate-pulse"></div>
    </motion.div>
  )
}

export default CogniAgentDashboard