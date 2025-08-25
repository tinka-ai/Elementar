"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Facebook,
  Instagram,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Calendar,
  Users,
  BookOpen,
  Image as ImageIcon,
  HelpCircle,
} from "lucide-react"   // <-- am adăugat iconițele necesare

// ... restul codului ContactPage

                {/* NAVIGARE RAPIDĂ – 3 carduri, cu lucide-react icons */}
                <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-300 mb-4">Între timp, explorează:</h3>
                  <div className="mx-auto max-w-3xl grid gap-3 justify-items-center sm:grid-cols-2 md:grid-cols-3">
                    <Link
                      href="/domenii"
                      className={`w-full p-3 rounded-lg bg-white/10 hover:bg-white/15 text-center transition-colors ${fx}`}
                    >
                      <BookOpen className="mx-auto h-6 w-6 text-sky-400 mb-1" />
                      <div className="text-sm text-gray-300">Domenii</div>
                    </Link>
                    <Link
                      href="/galerie"
                      className={`w-full p-3 rounded-lg bg-white/10 hover:bg-white/15 text-center transition-colors ${fx}`}
                    >
                      <ImageIcon className="mx-auto h-6 w-6 text-sky-400 mb-1" />
                      <div className="text-sm text-gray-300">Galerie</div>
                    </Link>
                    <Link
                      href="/faq"
                      className={`w-full p-3 rounded-lg bg-white/10 hover:bg-white/15 text-center transition-colors ${fx}`}
                    >
                      <HelpCircle className="mx-auto h-6 w-6 text-sky-400 mb-1" />
                      <div className="text-sm text-gray-300">FAQ</div>
                    </Link>
                  </div>
                </div>
                {/* /NAVIGARE RAPIDĂ */}
