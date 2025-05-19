"use client"
import {
  ArrowRight,
  Award,
  Coins,
  Flame,
  Gift,
  Leaf,
  Sparkles,
  Wallet,
  Youtube,
  MessageCircle,
  Twitter,
  ChevronRight,
  Clock,
  Users,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroSection } from "@/components/hero-section"
import { NavBar } from "@/components/nav-bar"
import { SocialCard } from "@/components/social-card"
import { FloatingClovers } from "@/components/floating-clovers"
import { TokenStats } from "@/components/token-stats"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <TokenStats />
      <NavBar />
      <HeroSection />

      {/* About Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black to-green-950 relative overflow-hidden">
        <FloatingClovers count={5} />

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block bg-green-500/20 px-4 py-1 rounded-full border border-green-500/30 mb-4">
              <span className="text-green-400 text-sm font-medium">The Lottery Token of Bitrock</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-green-500">What is</span> <span className="text-yellow-500">Lucky Charm?</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Lucky Charm ($CHARM) is a unique, low-cap utility token on the Bitrock blockchain, combining scarcity,
              community governance, and a bi-weekly lottery system powered by innovative tokenomics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="bg-black/60 border border-green-500/30 text-white overflow-hidden group hover:border-green-400/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16 group-hover:bg-green-500/20 transition-all duration-500"></div>
              <CardHeader className="pb-2 relative z-10">
                <CardTitle className="text-yellow-500 flex items-center text-xl">
                  <Shield className="mr-2 h-5 w-5 text-green-400" />
                  Ultra-Scarce Supply
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-300">
                  With only 100 $CHARM tokens in existence, Lucky Charm is one of the most scarce tokens on Bitrock.
                  This extreme scarcity creates natural value appreciation as demand increases.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border border-green-500/30 text-white overflow-hidden group hover:border-green-400/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16 group-hover:bg-green-500/20 transition-all duration-500"></div>
              <CardHeader className="pb-2 relative z-10">
                <CardTitle className="text-yellow-500 flex items-center text-xl">
                  <Zap className="mr-2 h-5 w-5 text-green-400" />
                  Deflationary Model
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-300">
                  Our innovative tokenomics include a 1% burn on every transaction, continuously reducing the already
                  limited supply. This deflationary mechanism ensures long-term value for holders.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border border-green-500/30 text-white overflow-hidden group hover:border-green-400/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16 group-hover:bg-green-500/20 transition-all duration-500"></div>
              <CardHeader className="pb-2 relative z-10">
                <CardTitle className="text-yellow-500 flex items-center text-xl">
                  <Users className="mr-2 h-5 w-5 text-green-400" />
                  Community Driven
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-300">
                  Lucky Charm is built by the community, for the community. Token holders can vote on project decisions,
                  helping shape the future direction and development of the ecosystem.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Token Details Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-black relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-5"></div>

        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-green-500">Token</span> <span className="text-yellow-500">Details</span>
          </h2>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-300 leading-relaxed">
              Lucky Charm's tokenomics are designed to create a sustainable ecosystem that rewards holders, funds the
              lottery system, and ensures long-term growth through strategic mechanisms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-black/60 border border-green-500/30 text-white transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <CardHeader className="pb-2">
                <CardTitle className="text-yellow-500 flex items-center">
                  <Coins className="mr-2 h-5 w-5" />
                  Supply
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">100 $CHARM</p>
                <p className="text-sm text-gray-400 mt-2">Fully circulating, ultra-scarce supply</p>
                <div className="mt-4 pt-4 border-t border-green-500/20">
                  <p className="text-xs text-gray-500">
                    One of the lowest supply tokens on Bitrock, creating natural scarcity and value potential
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border border-green-500/30 text-white transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <CardHeader className="pb-2">
                <CardTitle className="text-yellow-500 flex items-center">
                  <Flame className="mr-2 h-5 w-5" />
                  Deflationary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">1% Burn</p>
                <p className="text-sm text-gray-400 mt-2">Every transaction reduces total supply</p>
                <div className="mt-4 pt-4 border-t border-green-500/20">
                  <p className="text-xs text-gray-500">
                    Continuous burning mechanism ensures the supply only decreases over time, increasing scarcity
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border border-green-500/30 text-white transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <CardHeader className="pb-2">
                <CardTitle className="text-yellow-500 flex items-center">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Reflections
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">2% Rewards</p>
                <p className="text-sm text-gray-400 mt-2">Built-in reflections for all holders</p>
                <div className="mt-4 pt-4 border-t border-green-500/20">
                  <p className="text-xs text-gray-500">
                    Passive income through reflections - earn more $CHARM just by holding in your wallet
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tax Breakdown Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black to-green-950/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-green-500">Tax</span> <span className="text-yellow-500">Breakdown</span>
          </h2>

          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-gray-300 leading-relaxed">
              Lucky Charm implements a strategic 8% tax on all buys and sells to fund the lottery system, marketing
              efforts, and to ensure the long-term sustainability of the project.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-xl mb-6 text-center">
              <span className="text-yellow-500 font-semibold">8% Total</span>
              <span className="text-gray-300"> on Buys & Sells</span>
            </p>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-green-400 flex items-center">
                    <Gift className="mr-2 h-4 w-4" /> Lottery Wallet
                  </span>
                  <span className="text-yellow-500">3%</span>
                </div>
                <Progress value={37.5} className="h-2 bg-gray-800" indicatorClassName="bg-green-500" />
                <p className="text-xs text-gray-400 mt-1">Funds the bi-weekly lottery draws for all eligible holders</p>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-green-400 flex items-center">
                    <TrendingUp className="mr-2 h-4 w-4" /> Marketing
                  </span>
                  <span className="text-yellow-500">2%</span>
                </div>
                <Progress value={25} className="h-2 bg-gray-800" indicatorClassName="bg-green-500" />
                <p className="text-xs text-gray-400 mt-1">Ensures continuous promotion and growth of the project</p>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-green-400 flex items-center">
                    <Sparkles className="mr-2 h-4 w-4" /> Reflections
                  </span>
                  <span className="text-yellow-500">2%</span>
                </div>
                <Progress value={25} className="h-2 bg-gray-800" indicatorClassName="bg-green-500" />
                <p className="text-xs text-gray-400 mt-1">Distributed to all holders proportional to their holdings</p>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-green-400 flex items-center">
                    <Wallet className="mr-2 h-4 w-4" /> Liquidity
                  </span>
                  <span className="text-yellow-500">1%</span>
                </div>
                <Progress value={12.5} className="h-2 bg-gray-800" indicatorClassName="bg-green-500" />
                <p className="text-xs text-gray-400 mt-1">Adds to liquidity pool to reduce price impact on trades</p>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-green-400 flex items-center">
                    <Flame className="mr-2 h-4 w-4" /> Burn
                  </span>
                  <span className="text-yellow-500">1%</span>
                </div>
                <Progress value={12.5} className="h-2 bg-gray-800" indicatorClassName="bg-green-500" />
                <p className="text-xs text-gray-400 mt-1">Permanently removed from circulation, increasing scarcity</p>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <Button
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-500/10 px-8 py-3 text-lg group"
              >
                View Contract Details
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lottery Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-black relative overflow-hidden">
        <FloatingClovers count={8} />

        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-green-500">Lottery</span> <span className="text-yellow-500">Utility</span>
          </h2>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-300 leading-relaxed">
              The Lucky Charm lottery is the heart of our ecosystem. Every two weeks, one fortunate holder wins the
              entire accumulated prize pool, creating life-changing opportunities for our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-green-500 p-2 rounded-full">
                  <Gift className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-500">Bi-Weekly Draws</h3>
                  <p className="text-gray-300 mt-1">
                    Hold just 1 $CHARM to be automatically entered into our bi-weekly lottery. No additional steps
                    required - your wallet address is automatically eligible as long as you hold the minimum amount.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-green-500 p-2 rounded-full">
                  <Wallet className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-500">Growing Prize Pool</h3>
                  <p className="text-gray-300 mt-1">
                    3% of all buys/sells + 1% of NFT marketplace sales fund the lottery wallet. The more trading
                    activity, the larger the prize pool grows. This creates a self-sustaining ecosystem where activity
                    benefits everyone.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-green-500 p-2 rounded-full">
                  <Award className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-500">Winner Takes All</h3>
                  <p className="text-gray-300 mt-1">
                    Every second Friday, one random eligible wallet is selected to win the entire pot. Winners are
                    announced live on our social channels, with the prize transferred immediately to the winner's
                    wallet.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-green-500 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-500">Next Draw Countdown</h3>
                  <p className="text-gray-300 mt-1">
                    Our next lottery draw happens in just days! Join our Telegram and YouTube channels to watch the live
                    drawing and see if you're the next lucky winner of the growing prize pool.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-900/20 p-8 rounded-lg border border-green-500/30 relative overflow-hidden group">
              <div className="absolute -top-20 -right-20 text-[200px] text-green-500/10 group-hover:text-green-500/20 transition-colors duration-500">
                🍀
              </div>
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-black/40 rounded-full mb-4">
                    <Award className="h-12 w-12 text-yellow-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-500 mb-2">Current Prize Pool</h3>
                  <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">1.28 ETH</div>
                  <p className="text-gray-400">Worth approximately $3,840</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-black/40 p-4 rounded-lg">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Eligible Wallets:</span>
                      <span className="text-yellow-500 font-medium">42</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Your Chance of Winning:</span>
                      <span className="text-yellow-500 font-medium">2.38%</span>
                    </div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg group">
                    Enter Lottery Draw
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance & NFT Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-green-950/50 to-black">
        <div className="container mx-auto">
          <Tabs defaultValue="governance" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-green-950 border border-green-500/30 max-w-md mx-auto">
              <TabsTrigger value="governance" className="text-lg">
                Governance
              </TabsTrigger>
              <TabsTrigger value="nft" className="text-lg">
                NFT Marketplace
              </TabsTrigger>
            </TabsList>
            <TabsContent value="governance" className="mt-8 bg-black/60 p-6 rounded-lg border border-green-500/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-yellow-500 mb-4">Community Governance</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Lucky Charm is built on the principle of decentralized governance. Every $CHARM holder has a voice
                    in the project's future, with voting power proportional to their holdings. This ensures the project
                    evolves according to the community's wishes.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <Leaf className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                      <span>Vote on new features and improvements to the Lucky Charm ecosystem</span>
                    </li>
                    <li className="flex items-start">
                      <Leaf className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                      <span>Decide on marketing initiatives and community events to grow our presence</span>
                    </li>
                    <li className="flex items-start">
                      <Leaf className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                      <span>Propose changes to tokenomics and lottery mechanics as the project evolves</span>
                    </li>
                    <li className="flex items-start">
                      <Leaf className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                      <span>Shape the roadmap of the project through community consensus</span>
                    </li>
                  </ul>
                  <Button className="mt-8 bg-green-600 hover:bg-green-700 text-white group">
                    Join Governance{" "}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="bg-green-900/20 p-8 rounded-lg border border-green-500/30 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute -bottom-16 -right-16 text-[200px] text-green-500/10 group-hover:text-green-500/20 transition-colors duration-500">
                    🗳️
                  </div>
                  <div className="text-center relative z-10">
                    <div className="text-6xl mb-4">🗳️</div>
                    <h4 className="text-xl font-semibold text-yellow-500 mb-2">Your Voice Matters</h4>
                    <p className="text-gray-300 mb-4">Every $CHARM gives you voting power</p>
                    <div className="bg-black/40 p-4 rounded-lg">
                      <p className="text-sm text-gray-400">
                        "The community is the heart of Lucky Charm. We believe in true decentralization, where token
                        holders guide the project's future."
                      </p>
                      <p className="text-yellow-500 text-sm mt-2">- Lucky Charm Team</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="nft" className="mt-8 bg-black/60 p-6 rounded-lg border border-green-500/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-yellow-500 mb-4">NFT Marketplace</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    The Lucky Charm NFT marketplace is a vibrant ecosystem where artists and collectors come together to
                    trade unique digital assets on the Bitrock blockchain. Every transaction contributes to the lottery
                    pool, creating a symbiotic relationship between NFT trading and token utility.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Official marketplace:{" "}
                    <a
                      href="https://charmnfts.store"
                      className="text-green-400 underline hover:text-green-300 transition-colors"
                    >
                      charmnfts.store
                    </a>
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <Leaf className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                      <span>1% of all NFT sales contribute directly to the lottery pool, increasing prize amounts</span>
                    </li>
                    <li className="flex items-start">
                      <Leaf className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                      <span>Exclusive Lucky Charm NFT collections with special utility within our ecosystem</span>
                    </li>
                    <li className="flex items-start">
                      <Leaf className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                      <span>Special perks for NFT holders, including increased lottery odds and governance weight</span>
                    </li>
                    <li className="flex items-start">
                      <Leaf className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                      <span>Trade and collect on Bitrock blockchain with low fees and fast transactions</span>
                    </li>
                  </ul>
                  <Button className="mt-8 bg-green-600 hover:bg-green-700 text-white group">
                    Visit Marketplace{" "}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30 aspect-square flex items-center justify-center group hover:border-green-400 transition-all duration-300 cursor-pointer">
                    <img
                      src="/placeholder.svg?height=150&width=150"
                      alt="Lucky Charm NFT"
                      className="rounded group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30 aspect-square flex items-center justify-center group hover:border-green-400 transition-all duration-300 cursor-pointer">
                    <img
                      src="/placeholder.svg?height=150&width=150"
                      alt="Lucky Charm NFT"
                      className="rounded group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30 aspect-square flex items-center justify-center group hover:border-green-400 transition-all duration-300 cursor-pointer">
                    <img
                      src="/placeholder.svg?height=150&width=150"
                      alt="Lucky Charm NFT"
                      className="rounded group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30 aspect-square flex items-center justify-center group hover:border-green-400 transition-all duration-300 cursor-pointer">
                    <img
                      src="/placeholder.svg?height=150&width=150"
                      alt="Lucky Charm NFT"
                      className="rounded group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-green-900/20 to-transparent opacity-50"></div>

        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-green-500">Join Our</span> <span className="text-yellow-500">YouTube Community</span>
          </h2>

          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-gray-300 leading-relaxed">
              Subscribe to our YouTube channel for the latest updates, token insights, lottery draws, and educational
              content. Be part of our growing community and never miss important announcements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-black/60 p-6 rounded-lg border border-green-500/30 overflow-hidden transform hover:border-green-400/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]">
            <div className="relative">
              <img
                src="/images/youtube-banner.png"
                alt="Lucky Charm YouTube Channel"
                className="w-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
                <div className="p-6 md:p-8 w-full">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center">
                        <Youtube className="text-red-500 mr-3 h-8 w-8" /> Lucky Charm Channel
                      </h3>
                      <p className="text-gray-300 mb-4 max-w-xl">
                        Watch our bi-weekly lottery draws live, learn about tokenomics, and stay updated with the latest
                        developments in the Lucky Charm ecosystem. Join our 3,000+ subscribers!
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <Button
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-6 text-lg w-full md:w-auto"
                        onClick={() => window.open("https://m.youtube.com/@luckycharm-bitrock", "_blank")}
                      >
                        <Youtube className="mr-2 h-5 w-5" /> Subscribe Now
                      </Button>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="bg-black/40 p-3 rounded-lg border border-gray-800 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-500">5+</div>
                        <div className="text-xs text-gray-400">Videos</div>
                      </div>
                    </div>
                    <div className="bg-black/40 p-3 rounded-lg border border-gray-800 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-500">Bi-Weekly</div>
                        <div className="text-xs text-gray-400">Live Draws</div>
                      </div>
                    </div>
                    <div className="bg-black/40 p-3 rounded-lg border border-gray-800 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-500">24/7</div>
                        <div className="text-xs text-gray-400">Community</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contract & Links Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black to-green-950/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-green-500">Live on</span> <span className="text-yellow-500">Bitrock</span>
            </h2>
            <p className="text-gray-300 mb-4">
              Lucky Charm is fully verified and audited on the Bitrock blockchain, ensuring security and transparency
              for all holders.
            </p>
            <p className="text-gray-300">Verified smart contract:</p>
            <div className="mt-2 bg-black/60 p-3 rounded-lg border border-green-500/30 inline-block max-w-full overflow-hidden group hover:border-green-400/60 transition-all duration-300">
              <code className="text-green-400 text-xs sm:text-sm md:text-base break-all group-hover:text-green-300 transition-colors">
                0xA056871E6796315c558280bff7E7f5d2c5B1f6fB
              </code>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-green-500">Join Our</span> <span className="text-yellow-500">Community</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <SocialCard
              icon="🌐"
              title="Website"
              subtitle="luckycharmbitrock.net"
              url="https://luckycharmbitrock.net"
              color="green"
            />

            <SocialCard
              icon={<MessageCircle className="h-8 w-8 text-[#0088cc]" />}
              title="Telegram"
              subtitle="Join our community"
              url="https://t.me/LuckyCharmBitrock"
              color="blue"
            />

            <SocialCard
              icon={<Twitter className="h-8 w-8 text-[#1DA1F2]" />}
              title="X/Twitter"
              subtitle="@luckycharmbrock"
              url="https://twitter.com/luckycharmbrock"
              color="blue"
            />

            <SocialCard
              icon={<Youtube className="h-8 w-8 text-red-600" />}
              title="YouTube"
              subtitle="Watch & Subscribe"
              url="https://m.youtube.com/@luckycharm-bitrock"
              color="red"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 lg:px-16 bg-black border-t border-green-500/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">🍀</span>
                <span className="font-bold text-xl">
                  <span className="text-green-500">Lucky</span> <span className="text-yellow-500">Charm</span>
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                The Lottery Token of Bitrock! Combining scarcity, community governance, and a bi-weekly lottery system.
              </p>
            </div>

            <div>
              <h4 className="text-yellow-500 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Tokenomics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Lottery System
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    NFT Marketplace
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Governance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-yellow-500 font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-6 border-t border-green-500/20">
            <p className="text-yellow-500/70 text-sm mb-4">
              ⚠️ Note: This is a highly limited and deflationary token with only 100 total supply. Combined with the
              lottery feature, Lucky Charm brings gamified DeFi to Bitrock!
            </p>
            <p className="text-gray-600 text-xs">© 2025 Lucky Charm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
