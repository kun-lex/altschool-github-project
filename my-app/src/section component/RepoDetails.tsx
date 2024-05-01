import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  updated_at: string;
  forks_count: number;
}

export type RepoDetailsParams = {
  repoName: string;
}

const RepoDetails: React.FC = () => {
  const { repoName } = useParams<RepoDetailsParams>();
  const [repoDetails, setRepoDetails] = useState<Repository | null>(null);

  useEffect(() => {
    fetchRepoDetails();
  }, [repoName]);

  const fetchRepoDetails = async () => {
    try {
      const token = import.meta.env.VITE_GITHUB_TOKENS; // Replace with your actual token
      const response = await axios.get(`https://api.github.com/user/repos/${repoName}`, {
        headers: {
          Authorization: `token ${token}`
        }
      });
      setRepoDetails(response.data);
    } catch (error) {
      console.error('Error fetching repository details:', error);
    }
  };

  return (
    <Container maxW="container.lg" mt={8}>
      {repoDetails ? (
        <>
          <Heading>{repoDetails.name}</Heading>
          <Box p={4} borderWidth="1px" borderRadius="md" mt={4}>
            <Text>Description: {repoDetails.description}</Text>
            <Text>Language: {repoDetails.language}</Text>
            <Text>Stars: {repoDetails.stargazers_count}</Text>
            <Text>Last updated: {new Date(repoDetails.updated_at).toLocaleDateString()}</Text>
            <Text>Forks: {repoDetails.forks_count}</Text>
            <Text>URL: <a href={repoDetails.html_url} target="_blank" rel="noopener noreferrer">{repoDetails.html_url}</a></Text>
          </Box>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </Container>
  );
};

export default RepoDetails;
