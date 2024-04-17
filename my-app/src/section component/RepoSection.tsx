import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Heading, Stack, Text, Input, Select, Button, Grid } from '@chakra-ui/react';
import axios from 'axios';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
}

const RepoSection: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [languageFilter, setLanguageFilter] = useState<string>('');
  const [starFilter, setStarFilter] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    fetchRepos();
  }, [currentPage]); // Fetch repos when page changes

  const fetchRepos = async () => {
    try {
      const token = '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'; // Replace with your actual token
      const perPage = 10;
      const response = await axios.get(`https://api.github.com/user/repos?page=${currentPage}&per_page=${perPage}`, {
        headers: {
          Authorization: `token ${token}`
        }
      });
      setRepos(response.data);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  };

  const filteredRepos = repos.filter(repo => {
    return (
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (languageFilter === '' || repo.language === languageFilter) &&
      (starFilter === '' || repo.stargazers_count >= parseInt(starFilter))
    );
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleLanguageFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguageFilter(event.target.value);
  };

  const handleStarFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStarFilter(event.target.value);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Container maxW="container.lg" mt={8} pt={50}>
      <Heading mb={4}>My GitHub Repositories</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={8}>
        <Box>
          <Input
            mb={4}
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Select mb={4} placeholder="Filter by language" value={languageFilter} onChange={handleLanguageFilterChange}>
            <option value="">All Languages</option>
            {/* Add options for each available language */}
            <option value="JavaScript">JavaScript</option>
            <option value="TypeScript">TypeScript</option>
            {/* Add more languages as needed */}
          </Select>
          <Select mb={4} placeholder="Filter by stars" value={starFilter} onChange={handleStarFilterChange}>
            <option value="">All Stars</option>
            <option value="100">100+</option>
            <option value="500">500+</option>
            <option value="1000">1000+</option>
            {/* Add more star ranges as needed */}
          </Select>
        </Box>
        <Box>
          <Stack spacing={4}>
            {filteredRepos.map(repo => (
              <Link key={repo.id} to={`/repo/${repo.name}`}>
                <Box p={4} borderWidth="1px" borderRadius="md" cursor="pointer">
                  <Heading as="h3" size="md">{repo.name}</Heading>
                  <Text mt={2}>{repo.description}</Text>
                  <Text mt={2}>Language: {repo.language}</Text>
                  <Text mt={2}>Stars: {repo.stargazers_count}</Text>
                </Box>
              </Link>
            ))}
          </Stack>
          <Box mt={4}>
            <Button onClick={handlePrevPage} mr={2} disabled={currentPage === 1}>Previous Page</Button>
            <Button onClick={handleNextPage}>Next Page</Button>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

export default RepoSection;
