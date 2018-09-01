///<reference path="../../../Assets/Lib/jQuery/typings.d.ts" />

$(() => {
    const generateWorkflowUrl = function () {
        const workflowTypeId: string = $('[data-workflow-type-id]').data('workflow-type-id');
        const activityId: string = $('[data-activity-id]').data('activity-id');
        const tokenLifetime: string = <string>$($('[data-token-lifetime-input]').data('data-token-lifetime-input')).val();
        const generateUrl: string = $('[data-generate-url]').data('generate-url') + `?workflowTypeId=${workflowTypeId}&activityId=${activityId}&${tokenLifetime}`;
        const antiforgeryHeaderName: string = $('[data-antiforgery-header-name]').data('antiforgery-header-name');
        const antiforgeryToken: string = $('[data-antiforgery-token]').data('antiforgery-token');
        const headers: any = {};

        headers[antiforgeryHeaderName] = antiforgeryToken;

        $.post({
            url: generateUrl,
            headers: headers
        }).done(url => {
            $('#workflow-url-text').val(url);
        });
    };

    $('#generate-url-button').on('click', e => {
        generateWorkflowUrl();
    });

    if ($('#workflow-url-text').val() == '') {
        generateWorkflowUrl();
    }
});