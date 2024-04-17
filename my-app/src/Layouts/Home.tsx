import HeroSection from "../section component/HeroSection"
import SkillsCard from "../global component/Skills"
import Projects from "../global component/Projects"
import ArticleList from "../global component/Blog"
import RepoList from "../section component/GitRepoList"
import ErrorTestBtn from "../global component/ErrorTestBtn"

function Home() {
  return (
    <div>
        <HeroSection />
        <Projects />
        <RepoList />
        <SkillsCard />
        <ArticleList />
        <ErrorTestBtn />
  </div>
  )
}

export default Home