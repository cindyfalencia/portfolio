import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    let isMounted = true;
    const getRepoData = () => {
      const limit = openSource.pinnedReposLimit || 6;
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          if (isMounted) {
            const pinnedItems =
              response &&
              response.data &&
              response.data.user &&
              response.data.user.pinnedItems &&
              response.data.user.pinnedItems.edges;
            setrepoFunction((pinnedItems || []).slice(0, limit));
          }
        })
        .catch(function (error) {
          console.error(
            `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
          );
          if (isMounted) {
            setrepoFunction("Error");
          }
        });
    };
    getRepoData();
    return () => {
      isMounted = false;
    };
  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }
  if (openSource.display) {
    const hasGithubRepos = !(typeof repo === "string" || repo instanceof String);
    const privateProjects = openSource.privateProjects || [];
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="project">
          {privateProjects.length > 0 && (
            <>
              <h1 className="project-title">Featured Projects</h1>
              <div className="private-projects-grid">
                {privateProjects.map(project => (
                  <article
                    className={
                      isDark
                        ? "dark-card-mode private-project-card"
                        : "private-project-card"
                    }
                    key={project.name}
                  >
                    <img src={project.image} alt={`${project.name} preview`} />
                    <div className="private-project-content">
                      <div className="private-project-heading">
                        <h2>{project.name}</h2>
                        <span>{project.status}</span>
                      </div>
                      <p>{project.description}</p>
                      <div className="private-project-tags">
                        {project.tags.map(tag => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
          {hasGithubRepos && repo.length > 0 && (
            <>
              <h1 className="project-title github-project-title">
                Pinned on GitHub
              </h1>
              <div className="repo-cards-div-main">
                {repo.map((v, i) => {
                  if (!v) {
                    console.error(
                      `Github Object for repository number : ${i} is undefined`
                    );
                    return null;
                  }
                  return (
                    <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
                  );
                })}
              </div>
            </>
          )}
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
