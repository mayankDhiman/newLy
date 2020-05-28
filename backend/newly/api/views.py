# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response

import feedparser
import random

class DeliverArticles(APIView):
	def get(self, request):
		articles = []
		rss_urls = {'Hindustan Times' : 'https://www.hindustantimes.com/rss/india/rssfeed.xml', 'New York Times': 'https://rss.nytimes.com/services/xml/rss/nyt/NYRegion.xml','BBC': 'http://feeds.bbci.co.uk/news/rss.xml?edition=uk','Reddit': 'https://www.reddit.com/.rss'}
		# authors = ['Hindustan Times', 'New York Times', 'BBC', 'Reddit']
		feed = feedparser.parse(rss_urls['Hindustan Times'])
		for each in feed['items']:
			each_entry = {
				'title': each['title'],
				'link': each['link'],
				'summary': each['summary'],
				'published': each['published'][:16],
				'author': 'Hindustan Times',
			}
			articles.append(each_entry)

		feed = feedparser.parse(rss_urls['New York Times'])
		for each in feed['items']:
			each_entry = {
				'title': each['title'],
				'link': each['link'],
				'summary': each['summary'],
				'published': each['published'][:16],
				'author': 'New York Times'
			}
			articles.append(each_entry)

		feed = feedparser.parse(rss_urls['BBC'])
		for each in feed['items']:
			each_entry = {
				'title': each['title'],
				'link': each['link'],
				'summary': each['summary'],
				'published': each['published'][:16],
				'author': 'BBC'
			}
			articles.append(each_entry)

		feed = feedparser.parse(rss_urls['Reddit'])
		for each in feed['items']:
			each_entry = {
				'title': each['title'],
				'link': each['link'],
				'summary': "",
				# 'published': each['published'][:16],
				'author': 'Reddit'
			}
			articles.append(each_entry)

		random.shuffle(articles) 
		return Response(articles)

