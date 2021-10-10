import React, { Component } from 'react'
import {
    EuiPage,
    EuiPageBody,
    EuiPageContent,
    EuiPageContentBody,
    EuiPageHeader,
    EuiPageSideBar,
    EuiTitle,
    EuiButton,
    EuiSpacer,
  } from '@elastic/eui';
import SearchArea from './SearchArea';

export default class SearchResults extends Component {
    render() {
        return (
            <div>
                <SearchArea/>
                <EuiPage>
                    <EuiPageSideBar>SideBar nav</EuiPageSideBar>
                    <EuiPageBody>
                    <EuiPageHeader
                        iconType="logoElastic"
                        pageTitle="Page title"
                        rightSideItems={[
                        <EuiButton fill>Add something</EuiButton>,
                        <EuiButton>Do something</EuiButton>,
                        ]}
                    />
                    <EuiPageContent>
                        <EuiTitle>
                        <h2>Content title</h2>
                        </EuiTitle>
                        <EuiSpacer />
                        <EuiPageContentBody>{this.props.location.search}</EuiPageContentBody>
                    </EuiPageContent>
                    </EuiPageBody>
                </EuiPage>
            </div>
        )
    }
}