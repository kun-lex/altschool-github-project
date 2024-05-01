import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Heading, Text, Flex } from '@chakra-ui/react';
import axios from 'axios';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
}

const RepoList: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    fetchRepos();
  }, []); // Fetch repos only once on component mount

  const fetchRepos = async () => {
    try {
      const token = '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'; // Replace with your actual token
      const perPage = 4; // Display only 4 repos
      const response = await axios.get(`https://api.github.com/user/repos?per_page=${perPage}`, {
        headers: {
          Authorization: `token ${token}`
        }
      });
      setRepos(response.data);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  };

  return (
    <Container maxW="container.lg" mt={8} pt={50}>
      <Heading mb={4}>My GitHub Repositories</Heading>
      <Flex flexWrap="wrap" justifyContent="space-between">
        {repos.map(repo => (
          <Link key={repo.id} to={`/repo/${repo.name}`} style={{ flex: '0 0 48%', marginBottom: '1rem' }}>
            <Box p={4} borderWidth="1px" borderRadius="md" cursor="pointer" backgroundColor={'white'} color={'black'} _hover={{ bg: "#A100ED", transitionDuration: "500ms", color: "white"}} >
              <Heading as="h3" size="md">{repo.name}</Heading>
              <Text mt={2}>{repo.description}</Text>
              <Text mt={2}>Language: {repo.language}</Text>
              <Text mt={2}>Stars: {repo.stargazers_count}</Text>
            </Box>
          </Link>
        ))}
      </Flex>
    </Container>
  );
};

export default RepoList;
